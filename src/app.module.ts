import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthModule } from './apis/health/health.module';
import { HomeModule } from './apis/home/home.module';
import { DetailModule } from './apis/detail/detail.module';
import { UpdateModule } from './apis/update/update.module';
import { AuthModule } from './apis/auth/auth.module';
import { UserModule } from './apis/user/user.module';

@Module({
  imports: [
    HomeModule,
    HealthModule,
    DetailModule,
    UpdateModule,
    AuthModule,
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345678',
      database: 'sports',
      entities: [__dirname + '/apis/**/*.entity.*'],
      synchronize: true,
      logging: true,
    }),
  ],
})
export class AppModule {}
