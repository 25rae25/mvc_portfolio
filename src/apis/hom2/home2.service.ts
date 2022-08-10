import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Home } from '../home/entities/home.entity';

@Injectable()
export class Home2Service {
  constructor(
    @InjectRepository(Home)
    private readonly homeRepository: Repository<Home>,
  ) {}
  async findOne(id) {
    return await this.homeRepository.findOne({
      where: {
        id,
      },
    });
  }
}
