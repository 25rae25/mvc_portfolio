import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), //
    JwtModule.register({}),
  ],
  controllers: [
    AuthController, //
  ],
  providers: [
    AuthService, //
    UserService,
    JwtService,
  ],
})
export class AuthModule {}
