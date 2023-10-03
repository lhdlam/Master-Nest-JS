import { Expose } from 'class-transformer';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './../auth/user.entity';
import { Paginated } from './../pagination/paginator';

@Entity()
export class Student {
  constructor(partial?: Partial<Student>) {
    Object.assign(this, partial);
  }

  @PrimaryGeneratedColumn()
  @Expose()
  id: number;

  @Column()
  @Expose()
  name: string;

  @Column()
  @Expose()
  description: string;

  @Column()
  @Expose()
  when: Date;

  @Column()
  @Expose()
  address: string;

  @ManyToOne(() => User, (user) => user.organized)
  @Expose()
  organizer: User;

}

export class PaginatedStudents extends Paginated<Student>(Student) {}
