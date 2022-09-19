import { Body, Controller, Get, Post, Query, Render } from '@nestjs/common';
import { CreateHealthInput } from './dto/createHealth.input';
import { HealthService } from './health.service';

@Controller()
export class HealthController {
  constructor(
    private readonly healthService: HealthService, //
  ) {}

  @Get('/health')
  @Render('health')
  async board(
    @Query() query: { page: string; limit: string }, //
  ) {
    console.log(query, '================');
    const result = await this.healthService.find(query.page, query.limit);
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
