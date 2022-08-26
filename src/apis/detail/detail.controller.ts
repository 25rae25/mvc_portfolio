import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Render,
  Res,
} from '@nestjs/common';
import { DetailService } from './detail.service';

@Controller('detail')
export class DetailController {
  constructor(
    private readonly detailService: DetailService, //
  ) {}

  @Get('/:id')
  @Render('detail')
  async detail(
    @Param('id') id: string, //
  ) {
    const result = await this.detailService.findOne(id);
    return { data: result };
  }

  @Delete('/id')
  async delete(
    @Param('id') id: string, //
  ) {
    console.log(id, '11111111111111');
    const result = await this.detailService.delete(id);
    console.log(result, '2222222222222222');
    return result;
  }
}
