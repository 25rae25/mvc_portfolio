import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  // getAccessToken({ user }) {
  //   const accessToken = this.jwtService.sign(
  //     { nickname: user.nickname },
  //     { secret: 'myAccesskey', expiresIn: '3h' },
  //   );

  //   return accessToken;
  // }

  token({ user, res, req }) {
    const refreshToken = this.jwtService.sign(
      { nickname: user.nickname },
      { secret: 'myRefreshkey', expiresIn: '24h' },
    );

    console.log(refreshToken);
    // sessionStorage.setItem('refreshToken', refreshToken);

    res.cookie('refreshToken', refreshToken);
  }

  async getUserInfo(req, res) {
    let user = await this.userRepository.findOne({
      where: {
        email: req.user.email,
      },
    });

    if (!user) {
      user = await this.userRepository.save({
        email: req.user.email,
        nickname: req.user.nickname,
      });
    }

    this.token({ user, res, req });
    res.redirect('http://localhost:3000/home');
  }

  async logout({ req, res }) {
    const token = req.headers.cookie.replace('refreshToken=', '');
    try {
      jwt.verify(token, 'myRefreshkey');
      res.cookie('refreshToken', '');
      res.redirect('http://localhost:3000/home');
      return '로그아웃 성공';
    } catch {
      throw new UnauthorizedException();
    }
  }

  // const headers = req.headers;

  //   let Token;
  //   if (headers.cookie) Token = req.headers.cookie.split('=')[1];
  //   console.log(Token, '11111111111111');

  //   try {
  //     const myAccess = jwt.verify(Token, 'myRefreshkey');

  //     await this.cacheManager.set(Token, 'refreshToken', {
  //       ttl: myAccess['exp'] - myAccess['iat'],
  //     });

  //     return { aaa: true };
  //   } catch {
  //     throw new UnauthorizedException();
  //   }
}
