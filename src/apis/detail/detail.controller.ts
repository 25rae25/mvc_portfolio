import { Controller, Delete, Get, Param, Render, Res } from '@nestjs/common';
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
    @Res() res, //
  ) {
    const result = await this.detailService.delete(res);
    console.log(result, '2222222222222222');
    return result;
  }
}
