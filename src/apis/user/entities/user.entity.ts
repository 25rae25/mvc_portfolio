import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nickname: string;

  @Column({ nullable: true })
  pwd: string;

  @Column({ nullable: true })
  phone: string;

  @Column()
  email: string;

  // @ManyToMany(() => Health, (health) => health.user)
  // @Column()
  // health: Health;
}
