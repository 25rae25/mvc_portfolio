import { Body, Controller, Get, Param, Put, Render, Req } from '@nestjs/common';
import { Request } from 'express';
import * as jwt from 'jsonwebtoken';
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
    @Req() req: Request,
  ) {
    const result = await this.updateService.findOne(id);

    let Token = '';
    if (req.headers.cookie) {
      Token = req.headers.cookie.split('Token=')[1];
    } else {
      return { nickname: '', data: result };
    }
    if (Token === '') {
      return { nickname: '', data: result };
    } else if (Token !== undefined) {
      const checkToken = jwt.verify(Token, process.env.KEY);
      return { nickname: checkToken['nickname'], data: result };
    } else {
      return { nickname: '', data: result };
    }
  }

  @Put('/')
  async update(
    @Body() createHealthInput: CreateHealthInput, //
    @Req() req,
  ) {
    return await this.updateService.update({ req, createHealthInput });
  }
}
