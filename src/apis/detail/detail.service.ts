import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Health } from '../health/entities/health.entity';

@Injectable()
export class DetailService {
  constructor(
    @InjectRepository(Health)
    private readonly detailRepository: Repository<Health>, //
  ) {}

  async findOne(id) {
    return await this.detailRepository.findOne({
      where: {
        id,
      },
    });
  }

  async delete(data) {
    const result = await this.detailRepository.delete({ id: data.id });
    return result;
  }
}
