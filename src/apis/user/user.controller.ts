import { Controller, Get, Post, Render } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(
    private readonly userService: UserService, //
  ) {}

  @Post('/')
  async createUser() {}

  @Get('findId')
  @Render('findId')
  signup() {}

  @Get('findPw')
  @Render('findPw')
  findPw() {}

  @Get('about')
  @Render('about')
  about() {}
}
