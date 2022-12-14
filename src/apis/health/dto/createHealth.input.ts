import { Column } from 'typeorm';

export class CreateHealthInput {
  @Column()
  id: string;

  @Column()
  title: string;

  @Column()
  name: string;

  @Column()
  nickname: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  content: string;

  @Column()
  position: string;

  @Column()
  address: string;

  @Column()
  time: string;

  @Column()
  sport: string;

  @Column({ default: true })
  createdAt: string;
}
