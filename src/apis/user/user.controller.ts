import * as bcrypt from 'bcrypt';
import { Body, Controller, Get, Post, Render, Req } from '@nestjs/common';
import { CreateUserInput } from './dto/createUserInput';
import { UserService } from './user.service';
import { Request } from 'express';
import * as jwt from 'jsonwebtoken';

@Controller()
export class UserController {
  constructor(
    private readonly userService: UserService, //
  ) {}

  @Get('/signUp')
  @Render('signUp')
  signUp() {}

  @Post('/signUp')
  async createUser(
    @Body() createUserInput: CreateUserInput, //
  ) {
    const { pwd, ...userInfo } = createUserInput;
    const hashedPwd = await bcrypt.hash(pwd, 10);
    return this.userService.create({ pwd: hashedPwd, userInfo });
  }

  @Get('findId')
  @Render('findId')
  signup() {}

  @Get('findPw')
  @Render('findPw')
  findPw() {}

  @Get('about')
  @Render('about')
  about(
    @Req() req: Request, //
  ) {
    let accessToken = '';
    if (req.headers.cookie) {
      accessToken = req.headers.cookie.split('refreshToken=')[1];
    } else {
      return { nickname: '' };
    }
    if (accessToken === '') {
      return { nickname: '' };
    } else if (accessToken !== undefined) {
      const checkToken = jwt.verify(accessToken, 'myRefreshkey');
      return { nickname: checkToken['nickname'] };
    } else {
      return { nickname: '' };
    }
  }
}
