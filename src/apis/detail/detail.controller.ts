import { Body, Controller, Delete, Get, Param, Render } from '@nestjs/common';
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

  @Delete('/')
  async delete(
    @Body() data, //
  ) {
    console.log(data, '11111111111111');
    const result = await this.detailService.delete(data);
    console.log(result, '22222222222222');
    return result;
  }
}
