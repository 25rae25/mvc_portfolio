import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthModule } from './apis/health/health.module';
import { DetailModule } from './apis/detail/detail.module';
import { UpdateModule } from './apis/update/update.module';
import { AuthModule } from './apis/auth/auth.module';
import { UserModule } from './apis/user/user.module';
import { HomeModule } from './apis/home/home.module';
import * as redisStore from 'cache-manager-redis-store';
import { RedisClientOptions } from 'redis';
import { AppController } from './app.controller';
import { AppService } from './app.service';

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
      host: '10.115.113.2', //sql ip번호 & DNS A 랑 맞춰  10.126.209.2  sports-database
      port: 3306,
      username: 'root',
      password: 'root', // root 12345678
      database: 'sports',
      entities: [__dirname + '/apis/**/*.entity.*'],
      synchronize: true,
      logging: true,
    }),
    CacheModule.register<RedisClientOptions>({
      store: redisStore,
      url: 'redis://10.115.112.3:6379', // 10.126.208.3:6379 sports-redis
      isGlobal: true,
    }),
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
