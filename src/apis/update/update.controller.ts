import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Render,
  Req,
} from '@nestjs/common';
import { CreateHealthInput } from '../health/dto/createHealth.input';
import { UpdateService } from './update.service';

@Controller('update')
export class UpdateController {
  constructor(
    private readonly updateService: UpdateService, //
  ) {}

  @Get('/:id')
  @Render('update')
  async updatePageOpen(
    @Param('id') id: string, //
  ) {
    const result = await this.updateService.findOne(id);
    return { data: result };
  }

  @Put('/')
  async update(
    @Body() createHealthInput: CreateHealthInput, //
    @Req() req,
  ) {
    console.log(req, 'CreateHealthInput');
    return await this.updateService.update({ req, createHealthInput });
  }
}
