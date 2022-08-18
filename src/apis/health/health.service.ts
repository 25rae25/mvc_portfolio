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
    const result = await this.healthRepository.find();
    return result;
  }

  async findOne(id) {
    return await this.healthRepository.findOne({
      where: {
        id,
      },
    });
  }

  async create(data) {
    const date = new Date();
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const currentDate = `${yyyy}-${mm}-${dd}`;
    return await this.healthRepository.save({
      title: data.title,
      name: data.name,
      createdAt: currentDate,
      email: data.email,
      content: data.content,
      phone: data.phone,
      position: data.position,
      time: data.time,
      address: data.address,
      sport: data.sport,
    });
  }

  async update(data) {
    const result = await this.healthRepository.update(
      { title: data.title },
      { content: data.content },
    );
    return result;
  }
}
