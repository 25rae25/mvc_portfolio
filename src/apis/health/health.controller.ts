import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { CreateHealthInput } from './dto/createHealth.input';
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
  async button(@Body() createHealthInput: CreateHealthInput) {
    return await this.healthService.create(createHealthInput);
  }

  @Get('/write')
  @Render('write')
  write() {}
}
