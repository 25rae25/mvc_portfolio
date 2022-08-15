import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Write {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  title: string;

  @Column()
  name: string;

  // @Transform((createdAt) => moment(createdAt).format('YYYY/MM/DD'))
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
