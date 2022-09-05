import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async create({ pwd, userInfo }) {
    return await this.userRepository.save({
      ...userInfo,
      pwd,
    });
  }

  async findOne({ data }) {
    const result = await this.userRepository.findOne({
      where: {
        nickname: data,
      },
    });
    return result;
  }
}
