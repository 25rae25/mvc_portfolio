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

  async delete(id) {
    console.log(id);
    const findId = await this.detailRepository.findOne({
      where: { id },
    });
    console.log(findId, '33333333333333333');
    const result = await this.detailRepository.delete(findId);
    console.log(result, '444');
    return result.affected ? true : false;
  }
}
