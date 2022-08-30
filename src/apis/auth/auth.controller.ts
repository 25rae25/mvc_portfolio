import * as bcrypt from 'bcrypt';
import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Post,
  Render,
  UnprocessableEntityException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';

@Controller('')
export class AuthController {
  constructor(
    private readonly authService: AuthService, //
    private readonly userService: UserService,
  ) {}

  @Post('/login')
  async loginId(
    @Body() data, //
  ) {
    console.log(data);
    // const user = await this.userService.findOne({ nickname: data.nickname });
    // if (!user) throw new UnprocessableEntityException('아이디가 없습니다.');
    // const isAuth = await bcrypt.compare(data.pwd, user.pwd);
    // const refreshToken = await this.authService.getRefreshToken({
    //   res: req.res,
    //   req: req,
    // });
    //   if (refreshToken) {
    //     return await this.authService.getAccessToken({ nickname });
    //   } else {
    //     throw new InternalServerErrorException('refresh 토근 발급 실패');
    //   }
  }
}
