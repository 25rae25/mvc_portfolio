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

  async update({ req, createHealthInput }) {
    const findUpdate = await this.updateRepository.findOne({
      where: {
        title: req.body.title,
      },
    });
    const result = await this.updateRepository.update(
      {
        id: findUpdate.id,
      },
      {
        ...createHealthInput,
      },
    );
    console.log(result, '===================');
    return result;
  }
}
