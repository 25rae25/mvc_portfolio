import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Health } from './entities/health.entity';

@Injectable()
export class HealthService {
  constructor(
    @InjectRepository(Health)
    private readonly healthRepository: Repository<Health>, //
  ) {}
  ///////////////////////
  async count() {
    return await this.healthRepository.count();
  }

  async findArticle({ getNum }) {
    if (getNum !== 1) {
      getNum = getNum * 5 * ((getNum - 2) * 5 + 1) + 1;
    }
    console.log(getNum);
    return await this.healthRepository.find({
      take: 10,
      // skip: getNum,
      order: { id: 'DESC' },
    });
  }

  ///////////////////////
  async find(page: string, limit: string) {
    const parsedPage = parseInt(page);
    const parsedLimit = parseInt(limit);
    const count = await this.healthRepository.count();
    // const maxPage = Math.ceil(count / parsedLimit);

    const result = await this.healthRepository.find({
      order: {
        id: 'desc',
      },
      // skip: (parsedPage - 1) * parsedLimit,
      // take: parsedLimit,
    });

    //   // const count = await this.healthRepository.count()
    //   // return {result, count}
    return result;
  }

  async findOne(id) {
    return await this.healthRepository.findOne({
      where: {
        id,
      },
    });
  }

  async create(createHealthInput) {
    const date = new Date();
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const currentDate = `${yyyy}-${mm}-${dd}`;

    return await this.healthRepository.save({
      createdAt: currentDate,
      ...createHealthInput,
    });
  }
}
