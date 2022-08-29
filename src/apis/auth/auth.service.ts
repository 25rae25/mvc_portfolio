import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  getAccessToken({ nickname }) {
    const accessToken = this.jwtService.sign(
      { email: nickname.email, sub: nickname.id },
      { secret: 'myAccesskey', expiresIn: '1h' },
    );
    return accessToken;
  }

  getRefreshToken({ nickname, res, req }) {
    const refreshToken = this.jwtService.sign(
      { email: nickname.email, sub: nickname.id },
      { secret: 'myRefreshkey', expiresIn: '2w' },
    );
    res.setHeader('Set-Cookie', `refreshToken=${refreshToken}`);
  }

  // async getUserInfo(req, res, data) {
  //   let user = await this.userService.findOne({ nickname: data.nickname });

  //   if (!user) {
  //     user = await this.userRepository.save({
  //       email: req.user.email,
  //       name: req.user.name,
  //     });
  //   }

  //   this.getRefreshToKen({ email: user.email, res, req });
  //   res.redirect('https://localhost:3000');
  // }

  // async findId() {}
}
