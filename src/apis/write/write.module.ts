import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Write } from './entities/write.entity';
import { WriteController } from './write.controller';
import { WriteService } from './write.service';

@Module({
  imports: [TypeOrmModule.forFeature([Write])],
  controllers: [WriteController],
  providers: [WriteService],
})
export class WriteModule {}
