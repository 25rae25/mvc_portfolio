import { Controller, Get, Param, Render } from '@nestjs/common';
import { DetailService } from './detail.service';

@Controller('detail')
export class DetailController {
  constructor(
    private readonly detailService: DetailService, //
  ) {}

  @Get('/:id')
  @Render('detail')
  async detail(@Param('id') id: string) {
    const result = await this.detailService.findOne(id);
    return { data: result };
  }
}
