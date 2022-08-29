import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // async find() {
  //   const result = await this.userRepository.find({
  //     order: {
  //       id: 'desc',
  //     },
  //   });
  //   return result;
  // }

  async create({ pwd, userInfo }) {
    return await this.userRepository.save({
      ...userInfo,
      pwd,
    });
  }
}
