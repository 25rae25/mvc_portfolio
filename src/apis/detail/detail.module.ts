import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Health } from '../health/entities/health.entity';
import { DetailController } from './detail.controller';
import { DetailService } from './detail.service';

@Module({
  imports: [TypeOrmModule.forFeature([Health])],
  controllers: [DetailController],
  providers: [DetailService],
})
export class DetailModule {}
