import { Body, Controller, Get, Param, Put, Render } from '@nestjs/common';
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
    @Body() data, //
  ) {
    console.log(data, '111111111111');
    return await this.updateService.update({ data });
  }
}
