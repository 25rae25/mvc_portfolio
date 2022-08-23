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

  async update({ data }) {
    const result = await this.updateRepository.save({
      ...data,
    });
    console.log(result, '===================');
    return result;
  }
}
