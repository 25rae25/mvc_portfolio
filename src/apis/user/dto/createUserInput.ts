import { Column } from 'typeorm';

export class CreateUserInput {
  @Column()
  userId: string;

  @Column()
  email: string;

  @Column()
  pwd: string;

  @Column()
  phone: string;
}
