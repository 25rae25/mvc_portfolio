import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Render,
} from '@nestjs/common';
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
  async button(@Body() CreateHealthInput) {
    console.log(CreateHealthInput);
    return await this.healthService.create(CreateHealthInput);
  }

  @Get('/login')
  @Render('login')
  login() {}

  @Get('/write')
  @Render('write')
  write() {}

  // @Get('/detail_update')
  // @Render('detail_update')
  // async detail(@Param('id') id: string) {
  //   const result = await this.healthService.findOne(id);
  //   return { data: result };
  // }

  // @Put('detail_update')
  // async update(@Body() updateHealthInput) {
  //   console.log(updateHealthInput);
  //   return await this.healthService.update(updateHealthInput);
  // }
}
