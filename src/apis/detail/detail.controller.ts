import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Render,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import * as jwt from 'jsonwebtoken';
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
    @Req() req: Request,
  ) {
    const result = await this.detailService.findOne(id);
    let token = '';

    if (req.headers.cookie) {
      token = req.headers.cookie.split('Token=')[1];
    } else {
      return { nickname: '', data: result };
    }
    if (token === '') {
      return { nickname: '', data: result };
    } else if (token !== undefined) {
      const checkToken = jwt.verify(token, process.env.KEY);
      return { nickname: checkToken['nickname'], data: result };
    } else {
      return { nickname: '', data: result };
    }
  }

  @Delete('/')
  async delete(
    @Body() data, //
  ) {
    const result = await this.detailService.delete(data);
    return result;
  }
}
