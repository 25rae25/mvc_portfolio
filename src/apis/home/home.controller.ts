import { Body, Controller, Get, Post, Render, Req } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { HomeService } from './home.service';
import { Request } from 'express';

@Controller()
export class HomeController {
  constructor(
    private readonly homeService: HomeService, //
  ) {}

  @Get('/')
  @Render('home')
  async home(
    @Req() req: Request, //
  ) {
    let accessToken = req.headers.cookie.split('=')[1];
    const checkToken = jwt.verify(accessToken, 'myRefreshkey');
    console.log(checkToken, '222222222222');
    const result = await this.homeService.find();
    return { data: result, nickname: checkToken['nickname'] };
  }

  @Post('/test')
  async button(@Body() data) {
    return await this.homeService.create(data);
  }
}
