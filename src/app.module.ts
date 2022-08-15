import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthModule } from './apis/health/health.module';
import { Home2Module } from './apis/hom2/home2.module';
import { HomeModule } from './apis/home/home.module';
import { WriteModule } from './apis/write/write.module';

@Module({
  imports: [
    HomeModule,
    Home2Module,
    HealthModule,
    WriteModule,
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
