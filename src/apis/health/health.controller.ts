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

  @Get('/login')
  @Render('login')
  login() {}
}
