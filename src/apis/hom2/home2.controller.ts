import { Controller, Get, Param, Render } from '@nestjs/common';
import { Home2Service } from './home2.service';

@Controller('home2')
export class Home2Controller {
  constructor(private readonly home2Service: Home2Service) {}

  @Get('/:id')
  @Render('home2')
  async home2(@Param('id') id: string) {
    const result = await this.home2Service.findOne(id);
    return { data: result };
  }
}
