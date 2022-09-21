import * as bcrypt from 'bcrypt';
import {
  Body,
  CACHE_MANAGER,
  Controller,
  Get,
  Inject,
  Post,
  Render,
  Req,
  Res,
  UnauthorizedException,
  UnprocessableEntityException,
  UseGuards,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { AuthGuard } from '@nestjs/passport';
import * as jwt from 'jsonwebtoken';
import { Cache } from 'cache-manager';

@Controller()
export class AuthController {
  constructor(
    private readonly authService: AuthService, //
    private readonly userService: UserService,

    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
  ) {}

  @Get('/login')
  @Render('login')
  loginId() {}

  @UseGuards()
  @Post('/login')
  async login(
    @Body() data, //
    @Req() req: Request,
    @Res() res: Response,
  ) {
    // console.log(data);
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
    @Body() data, //
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const headers = req.headers;

    let Token;
    if (headers.cookie) Token = req.headers.cookie.split('=')[1];
    console.log(headers, '11111111111111');

    try {
      const myAccess = jwt.verify(Token, 'myRefreshkey');

      await this.cacheManager.set(Token, 'refreshToken', {
        ttl: myAccess['exp'] - myAccess['iat'],
      });

      return { aaa: true };
    } catch {
      throw new UnauthorizedException();
    }
  }
}
