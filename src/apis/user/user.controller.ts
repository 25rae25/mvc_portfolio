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

  @Get('about')
  @Render('about')
  about(
    @Req() req: Request, //
  ) {
    let Token = '';
    if (req.headers.cookie) {
      Token = req.headers.cookie.split('Token=')[1];
    } else {
      return { nickname: '' };
    }
    if (Token === '') {
      return { nickname: '' };
    } else if (Token !== undefined) {
      const checkToken = jwt.verify(Token, 'key');
      return { nickname: checkToken['nickname'] };
    } else {
      return { nickname: '' };
    }
  }
}
