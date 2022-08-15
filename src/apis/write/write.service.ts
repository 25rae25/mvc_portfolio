import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Write } from './entities/write.entity';

@Injectable()
export class WriteService {
  constructor(
    @InjectRepository(Write)
    private readonly writeRepository: Repository<Write>,
  ) {}
  async find() {
    return await this.writeRepository.find();
  }

  async create(data) {
    return await this.writeRepository.save({
      title: data.title,
      name: data.name,
      email: data.email,
      phone: data.phone,
      sport: data.sport,
      content: data.content,
    });
  }
}
