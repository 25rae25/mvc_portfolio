import * as bcrypt from 'bcrypt';
import {
  Body,
  Controller,
  InternalServerErrorException,
  Post,
  Req,
  Res,
  UnprocessableEntityException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';

// interface IContext {
//   req: Request;
//   res: Response;
// }

@Controller('')
export class AuthController {
  constructor(
    private readonly authService: AuthService, //
    private readonly userService: UserService,
  ) {}

  @Post('/login')
  async loginId(
    @Body() data, //
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const userId = data[0];
    const pwd = data[1];
    const user = await this.userService.findOne({ data: userId });

    if (!user) {
      throw new UnprocessableEntityException('아이디가 없습니다.');
    }
    const isAuth = await bcrypt.compare(pwd, user.pwd);
    console.log(isAuth, '333333333333333');
    if (isAuth)
      throw new UnprocessableEntityException('비밀번호가 일치하지 않습니다.');

    const refreshToken = await this.authService.getRefreshToKen({
      user,
      res,
      req,
    });

    if (refreshToken) {
      return await this.authService.getAccessToken({ user });
    } else {
      throw new InternalServerErrorException('refresh 토근 발급 실패');
    }
  }
}
