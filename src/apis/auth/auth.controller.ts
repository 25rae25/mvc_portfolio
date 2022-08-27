import { Body, Controller, Post, Render } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(
    private readonly authService: AuthService, //
  ) {}

  @Post('')
  async loginId(
    @Body() data, //
  ) {
    // return await this.authService.findId();
  }
}
