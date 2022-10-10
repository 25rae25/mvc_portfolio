import * as bcrypt from 'bcrypt';
import {
  Body,
  Controller,
  Get,
  Post,
  Render,
  Req,
  Res,
  UnprocessableEntityException,
  UseGuards,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AuthController {
  constructor(
    private readonly authService: AuthService, //
    private readonly userService: UserService,
  ) {}

  @Get('/login')
  @Render('login')
  loginId() {}

  @Post('/checkId')
  async checkId(@Body() data: any) {
    const user = await this.userService.findOne({ data: data.nickname });

    return user ? false : true;
  }

  @UseGuards()
  @Post('/login')
  async login(
    @Body() data, //
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const userId = data.userId;
    const pwd = data.pwd;
    const user = await this.userService.findOne({ data: userId });

    if (!user) {
      throw new UnprocessableEntityException('아이디가 존재하지 않습니다.');
    }

    const isAuth = await bcrypt.compare(pwd, user.pwd);

    if (!isAuth)
      throw new UnprocessableEntityException('비밀번호가 일치하지 않습니다.');

    await this.authService.token({
      user,
      res,
      req,
    });

    // const accessToken = this.authService.getAccessToken({ user });
    res.send('Token');
    return true;
  }

  @Get('/login/google')
  @UseGuards(AuthGuard('google'))
  async loginGoogle(
    @Req() req: Request, //
    @Res() res: Response,
  ) {
    await this.authService.getUserInfo(req, res);
  }

  @Get('/login/naver')
  @UseGuards(AuthGuard('naver'))
  async loginNaver(
    @Req() req: Request, //
    @Res() res: Response,
  ) {
    await this.authService.getUserInfo(req, res);
  }

  @Get('/login/kakao')
  @UseGuards(AuthGuard('kakao'))
  async loginKakao(
    @Req() req: Request, //
    @Res() res: Response,
  ) {
    await this.authService.getUserInfo(req, res);
  }

  @Get('/logout')
  @Render('logout')
  async logout(
    @Req() req: Request, //
    @Res() res: Response,
  ) {
    const result = await this.authService.logout({ req, res });
  }
}
