import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Health } from '../health/entities/health.entity';

@Injectable()
export class UpdateService {
  constructor(
    @InjectRepository(Health)
    private readonly updateRepository: Repository<Health>, //
  ) {}

  async findOne(id) {
    return await this.updateRepository.findOne({
      where: {
        id,
      },
    });
  }

  async update({ createHealthInput }) {
    return await this.updateRepository.update(
      { id: createHealthInput.id },
      { ...createHealthInput },
    );
  }
}
