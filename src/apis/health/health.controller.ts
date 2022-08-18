import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Render,
} from '@nestjs/common';
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
    console.log(data);
    return await this.healthService.create(data);
  }

  // @Patch('/detail_update')
  // async modify(@Body() data) {
  //   console.log(data);
  //   return await this.healthService.modify(data);
  // }

  @Delete()
  async delete() {}

  @Get('/login')
  @Render('login')
  login() {}

  @Get('/write')
  @Render('write')
  write() {}

  @Get('/detail_update')
  @Render('detail_update')
  async detail(@Param('id') id: string) {
    const result = await this.healthService.findOne(id);
    return { data: result };
  }

  @Put('update')
  async update(@Body() data) {
    return await this.healthService.update(data);
  }

  // @Post('/detail_update')
  // async button2(@Body() data) {
  //   console.log(data);
  //   return await this.healthService.modify(data);
  // }
}
