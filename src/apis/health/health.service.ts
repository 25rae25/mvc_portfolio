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
    const result = await this.healthRepository.find({
      order: {
        id: 'desc',
      },
    });

    // const count = await this.healthRepository.count()
    // return {result, count}

    return result;
  }

  async findOne(id) {
    return await this.healthRepository.findOne({
      where: {
        id,
      },
    });
  }

  // async create(data) {
  //   const date = new Date();
  //   const yyyy = date.getFullYear();
  //   const mm = String(date.getMonth() + 1).padStart(2, '0');
  //   const dd = String(date.getDate()).padStart(2, '0');
  //   const currentDate = `${yyyy}-${mm}-${dd}`;
  //   return await this.healthRepository.save({
  //     title: data.title,
  //     name: data.name,
  //     createdAt: currentDate,
  //     email: data.email,
  //     content: data.content,
  //     phone: data.phone,
  //     position: data.position,
  //     time: data.time,
  //     address: data.address,
  //     sport: data.sport,
  //   });
  // }

  async create(CreateHealthInput) {
    const date = new Date();
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const currentDate = `${yyyy}-${mm}-${dd}`;

    return await this.healthRepository.save({
      createdAt: currentDate,
      ...CreateHealthInput,
    });
  }

  // async update(updateHealthInput) {
  //   const date = new Date();
  //   const yyyy = date.getFullYear();
  //   const mm = String(date.getMonth() + 1).padStart(2, '0');
  //   const dd = String(date.getDate()).padStart(2, '0');
  //   const currentDate = `${yyyy}-${mm}-${dd}`;

  //   const findUser = await this.healthRepository.findOne({
  //     where: { id: updateHealthInput.id },
  //   });

  //   console.log(findUser, '==================');

  //   const result = await this.healthRepository.save({
  //     createdAt: currentDate,
  //     findUser,
  //     ...updateHealthInput,
  //   });

  //   console.log(result, '++++++++++++');
  //   return result;
  // }
}
