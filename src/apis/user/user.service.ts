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

  async findOne({ data }) {
    const result = await this.userRepository.findOne({
      where: {
        userId: data,
      },
    });
    return result;
  }

  async create({ hashedPwd, createUserInput }) {
    const { userId, ...items } = createUserInput;
    return await this.userRepository.save({
      ...createUserInput,
      pwd: hashedPwd,
    });
  }
}
