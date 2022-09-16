import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  getAccessToken({ user }) {
    const accessToken = this.jwtService.sign(
      { nickname: user.nickname },
      { secret: 'myAccesskey', expiresIn: '3h' },
    );

    return accessToken;
  }

  setRefreshToken({ user, res, req }) {
    const refreshToken = this.jwtService.sign(
      { nickname: user.nickname },
      { secret: 'myRefreshkey', expiresIn: '24h' },
    );

    res.setHeader('Set-Cookie', `refreshToken =${refreshToken}`);
    return refreshToken;
  }

  async getUserInfo(req, res) {
    let user = await this.userRepository.findOne({
      where: {
        nickname: req.user.nickname,
      },
    });

    if (!user) {
      user = await this.userRepository.save({
        email: req.user.email,
        name: req.user.name,
      });
    }

    this.setRefreshToken({ user, res, req });
    res.redirect('http://localhost:3000');
    //https://localhost:3000
    return user;
  }

  //dfnafkjalsdkfh
}
