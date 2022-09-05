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
  async login(
    @Body() data, //
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const userId = data.data[0];
    const pwd = data.data[1];
    console.log(data, '23321313131231312312');
    const user = await this.userService.findOne({ data: userId });

    if (!user) {
      throw new UnprocessableEntityException('아이디가 없습니다.');
    }
    const isAuth = await bcrypt.compare(pwd, user.pwd);
    console.log(isAuth, '333333333333333');
    if (isAuth)
      throw new UnprocessableEntityException('비밀번호가 일치하지 않습니다.');

    if (!isAuth)
      throw new UnprocessableEntityException('비밀번호가 일치하지 않습니다.');
    await this.authService.setRefreshToken({
      user,
      res,
    });

    const accessToken = this.authService.getAccessToken({ user });
    console.log(accessToken, '리프레쉬토큰2');
    res.send(accessToken);
  }
}
