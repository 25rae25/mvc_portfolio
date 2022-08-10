import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Home } from '../home/entities/home.entity';
import { Home2Controller } from './home2.controller';
import { Home2Service } from './home2.service';

@Module({
  imports: [TypeOrmModule.forFeature([Home])],
  controllers: [Home2Controller],
  providers: [Home2Service],
})
export class Home2Module {}
