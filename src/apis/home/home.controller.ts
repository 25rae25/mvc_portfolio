import { Body, Controller, Get, Post, Render, Req } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { HomeService } from './home.service';
import { Request } from 'express';

@Controller('home')
export class HomeController {
  constructor(
    private readonly homeService: HomeService, //
  ) {}

  @Get('/')
  @Render('home')
  async home(
    @Req() req: Request, //
  ) {
    let accessToken = '';
    if (req.headers.cookie) {
      accessToken = req.headers.cookie.split('refreshToken=')[1];
    } else {
      return { nickname: '' };
    }
    if (accessToken === '') {
      return { nickname: '' };
    } else if (accessToken !== undefined) {
      const checkToken = jwt.verify(accessToken, 'myRefreshkey');
      return { nickname: checkToken['nickname'] };
    } else {
      return { nickname: '' };
    }
  }
}
