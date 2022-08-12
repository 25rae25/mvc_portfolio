import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { HealthService } from './health.service';

@Controller()
export class HealthController {
  constructor(
    private readonly healthService: HealthService, //
  ) {}

  @Get('/health')
  @Render('health')
  async board() {
    const result = await this.healthService.find();
    return { data: result };
  }

  @Post('/health')
  async button(@Body() data) {
    return await this.healthService.create(data);
  }

  @Get('/write')
  @Render('write')
  write() {}

  // @Get('/baseketball')
  // @Render('baseketball')
  // async ball() {
  //   return {
  //     number: 1,
  //     name: '정민준',
  //     title: '과천농구장에서 센터 한분 구합니다.',
  //     date: '2022-08-15',
  //   };
  // }

  @Get('/login')
  @Render('login')
  login() {}
}
