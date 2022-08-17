import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Health } from '../health/entities/health.entity';

@Injectable()
export class DetailService {
  constructor(
    @InjectRepository(Health)
    private readonly healthRepository: Repository<Health>, //
  ) {}

  async findOne(id) {
    return await this.healthRepository.findOne({
      where: {
        id,
      },
    });
  }
}
