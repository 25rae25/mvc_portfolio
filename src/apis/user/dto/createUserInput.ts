import { Column } from 'typeorm';

export class CreateUserInput {
  @Column()
  nickname: string;

  @Column()
  email: string;

  @Column()
  pwd: string;

  @Column()
  phone: string;
}
