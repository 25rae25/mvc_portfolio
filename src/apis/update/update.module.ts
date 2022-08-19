import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Health } from '../health/entities/health.entity';
import { UpdateController } from './update.controller';
import { UpdateService } from './update.service';

@Module({
  imports: [TypeOrmModule.forFeature([Health])],
  controllers: [UpdateController],
  providers: [UpdateService],
})
export class UpdateModule {}
