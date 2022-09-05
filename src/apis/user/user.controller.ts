import * as bcrypt from 'bcrypt';
import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { CreateUserInput } from './dto/createUserInput';
import { UserService } from './user.service';

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
  about() {}
}
