import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Health } from './entities/health.entity';

@Injectable()
export class HealthService {
  constructor(
    @InjectRepository(Health)
    private readonly healthRepository: Repository<Health>, //
  ) {}

  async count() {
    return await this.healthRepository.count();
  }

  async findPage({ page }) {
    return await this.healthRepository.find({
      order: {
        id: 'DESC',
      },
      skip: (Number(page ?? 1) - 1) * 10,
      take: 10,
    });
  }

  async findOne(id) {
    return await this.healthRepository.findOne({
      where: {
        id,
      },
    });
  }

  async create(createHealthInput) {
    const date = new Date();
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const currentDate = `${yyyy}-${mm}-${dd}`;

    return await this.healthRepository.save({
      createdAt: currentDate,
      ...createHealthInput,
    });
  }
}
