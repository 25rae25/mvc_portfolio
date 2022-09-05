import * as bcrypt from 'bcrypt';
import {
  Body,
  Controller,
  Post,
  Req,
  Res,
  UnprocessableEntityException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { Repository } from 'typeorm';

@Controller()
export class AuthController {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly authService: AuthService, //
    private readonly userService: UserService,
  ) {}

  @Post('/login')
  async login(
    @Body() data, //
    @Req() req: Request,
    @Res() res: Response,
  ) {
    console.log(data);
    const userId = data.userId;
    const pwd = data.pwd;
    const user = await this.userService.findOne({ data: userId });

    if (!user) {
      throw new UnprocessableEntityException('아이디가 없습니다.');
    }
    const isAuth = await bcrypt.compare(pwd, user.pwd);

    if (!isAuth)
      throw new UnprocessableEntityException('비밀번호가 일치하지 않습니다.');
    await this.authService.setRefreshToken({
      user,
      res,
      req,
    });

    const accessToken = this.authService.getAccessToken({ user });
    res.send(accessToken);
  }
}
