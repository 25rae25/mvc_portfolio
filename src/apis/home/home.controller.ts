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
    let Token = '';
    if (req.headers.cookie) {
      Token = req.headers.cookie.split('Token=')[1];
    } else {
      return { nickname: '' };
    }
    if (Token === '') {
      return { nickname: '' };
    } else if (Token !== undefined) {
      const checkToken = jwt.verify(Token, process.env.KEY);
      return { nickname: checkToken['nickname'] };
    } else {
      return { nickname: '' };
    }
  }
}
