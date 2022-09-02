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

  getAccessToken({ user }) {
    const accessToken = this.jwtService.sign(
      { user: user.userId },
      { secret: 'accesskey', expiresIn: '1h' },
    );
    return accessToken;
  }

  getRefreshToKen({ user, res, req }) {
    try {
      const refreshToken = this.jwtService.sign(
        { user: user.userId },
        { secret: 'refreshkey', expiresIn: '2w' },
      );
      console.log(refreshToken, '11111111111111111');

      const allowedOrigins = ['http://localhost:3000/'];
      console.log(allowedOrigins, '----------');
      const origin = req.headers.origin;
      if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
      }

      res.setHeader('Access-Control-Allow-Credentials', 'true');
      res.setHeader(
        'Access-Control-Allow-Methods',
        'GET,HEAD,OPTIONS,POST,PUT',
      );
      res.setHeader(
        'Access-Control-Allow-Header',
        'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
      );

      res.cookie('refreshToken', refreshToken, {
        path: '/',
        domain: 'localhost:3000',
        httpOnly: true,
        secure: true,
        sameSite: 'none',
      });

      return true;
    } catch {
      return false;
    }
  }

  // async getUserInfo(req, res, data) {
  //   let user = await this.userService.findOne({ userId: data.userId });

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
