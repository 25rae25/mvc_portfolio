import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Health } from './entities/health.entity';

@Injectable()
export class HealthService {
  constructor(
    @InjectRepository(Health)
    private readonly healthRepository: Repository<Health>,
  ) {}
  async find() {
    return await this.healthRepository.find();
  }

  async create(data) {
    return await this.healthRepository.save({
      number: data.number,
      title: data.title,
      name: data.name,
      content: data.content,
    });
  }
}
