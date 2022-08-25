import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Health {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  title: string;

  @Column()
  name: string;

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

  // @Column({ nullable: true })
  // createdAt: string;

  @Column({ default: true })
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: Date;
}
