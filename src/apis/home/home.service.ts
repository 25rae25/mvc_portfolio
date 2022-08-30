import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Home } from './entities/home.entity';

@Injectable()
export class HomeService {
  constructor(
    @InjectRepository(Home)
    private readonly homeRepository: Repository<Home>,
  ) {}
  async find() {
    return await this.homeRepository.find();
  }

  async create(data) {
    return await this.homeRepository.save({
      data: data.data,
    });
  }
}
