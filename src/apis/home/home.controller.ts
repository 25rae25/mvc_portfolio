import { Body, Controller, Get, Post, Render, Req } from '@nestjs/common';
import { HomeService } from './home.service';

@Controller()
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get('/')
  @Render('home')
  async home() {
    const result = await this.homeService.find();
    return { data: result };
  }

  @Post('/test')
  async button(@Body() data) {
    return await this.homeService.create(data);
  }

  @Get('findId')
  @Render('findId')
  signup() {}

  @Get('findPw')
  @Render('findPw')
  findPw() {}

  @Get('about')
  @Render('about')
  about() {}
}
