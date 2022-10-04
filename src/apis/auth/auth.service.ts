import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import * as jwt from 'jsonwebtoken';
import 'dotenv/config';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  token({ user, res, req }) {
    const token = this.jwtService.sign(
      { nickname: user.nickname },
      { secret: process.env.KEY, expiresIn: '24h' },
    );

    res.cookie('Token', token);
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
    res.redirect('/');
  }

  async logout({ req, res }) {
    const token = req.headers.cookie.replace('Token=', '');
    try {
      jwt.verify(token, process.env.KEY);
      res.cookie('Token', '');
      res.redirect('/');
      return '로그아웃 성공';
    } catch {
      throw new UnauthorizedException('로그아웃 실패');
    }
  }
}
