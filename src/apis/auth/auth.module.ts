import { CacheModule, Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtRefreshStrategy } from 'src/commons/auth/jwt-refresh.strategy';
import { JwtGoogleStrategy } from 'src/commons/auth/jwt-social-google.strategy';
import { JwtKaKaoStrategy } from 'src/commons/auth/jwt-social-kakao.strategy';
import { JwtNaverStrategy } from 'src/commons/auth/jwt-social-naver.strategy';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    CacheModule.register(),
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
    JwtRefreshStrategy,
    JwtGoogleStrategy,
    JwtKaKaoStrategy,
    JwtNaverStrategy,
  ],
})
export class AuthModule {}
