import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Render,
  Req,
  UnprocessableEntityException,
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
    let token = '';
    if (req.headers.cookie) {
      token = req.headers.cookie.split('Token=')[1];
    } else {
      return { nickname: '', data: result, currentPage: query.page };
    }
    if (token === '') {
      return { nickname: '', data: result, currentPage: query.page };
    } else if (token !== undefined) {
      const checkToken = jwt.verify(token, process.env.KEY);
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
  async button(
    @Body() createHealthInput: CreateHealthInput, //
  ) {
    return await this.healthService.create(createHealthInput);
  }

  @Get('/write')
  @Render('write')
  write(
    @Req() req: Request, //
  ) {
    if (req.headers.cookie === undefined || req.headers.cookie === 'Token=') {
      req.res.redirect('/login');
    } else {
      const checkToken = jwt.verify(
        req.headers.cookie.split('Token=')[1],
        process.env.KEY,
      );
      return { nickname: checkToken['nickname'] };
    }
  }

  @Post('/write')
  async loginUser(
    @Body() data, //
    @Req() req: Request,
  ) {
    if (req.headers.cookie === undefined || req.headers.cookie === 'Token=') {
      throw new UnprocessableEntityException('로그인 후 이용가능 합니다.');
      // req.res.redirect('/login');
    } else {
      const checkToken = jwt.verify(
        req.headers.cookie.split('Token=')[1],
        process.env.KEY,
      );
      return { nickname: checkToken['nickname'] };
    }
  }
}
