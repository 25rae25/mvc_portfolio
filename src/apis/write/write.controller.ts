import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { WriteService } from './write.service';

@Controller()
export class WriteController {
  constructor(
    private readonly writeService: WriteService, //
  ) {}

  @Get('/write')
  @Render('write')
  async board() {
    const result = await this.writeService.find();
    return { data: result };
  }

  @Post('/write')
  async button(@Body() data) {
    return await this.writeService.create(data);
  }
}
