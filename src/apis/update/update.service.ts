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

  async update({ id, CreateHealthInput }) {
    const findUpdate = await this.updateRepository.findOne({
      where: { id: id },
    });
    console.log(findUpdate, '12313123123123213');
    const result = await this.updateRepository.save({
      ...findUpdate,
      ...CreateHealthInput,
    });
    console.log(result, '===================');
    return result;
  }
}
