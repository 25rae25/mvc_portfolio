import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Render,
  Req,
} from '@nestjs/common';
import { CreateHealthInput } from './dto/createHealth.input';
import { HealthService } from './health.service';
import * as jwt from 'jsonwebtoken';
import { Request } from 'express';

@Controller()
export class HealthController {
  constructor(
    private readonly healthService: HealthService, //
  ) {}

  @Get('/health')
  @Render('health')
  async board(
    @Query() query: { page: string; limit: string }, //
    @Req() req: Request, //
  ) {
    const result = await this.healthService.find(query.page, query.limit);
    let Token = '';
    if (req.headers.cookie) {
      Token = req.headers.cookie.split('Token=')[1];
    } else {
      return { nickname: '', data: result, currentPage: query.page };
    }
    if (Token === '') {
      return { nickname: '', data: result, currentPage: query.page };
    } else if (Token !== undefined) {
      const checkToken = jwt.verify(Token, 'key');
      return {
        nickname: checkToken['nickname'],
        data: result,
        currentPage: query.page,
      };
    } else {
      return { nickname: '', data: result, currentPage: query.page };
    }
  }

  @Post('/health')
  async button(@Body() createHealthInput: CreateHealthInput) {
    return await this.healthService.create(createHealthInput);
  }

  @Get('/write')
  @Render('write')
  write() {}
}
