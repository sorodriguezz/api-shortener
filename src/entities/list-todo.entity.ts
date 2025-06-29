import {
  Column,
  Entity,
  Generated,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SharedEntity } from './../shared/shared.entity';
import { UserEntity } from './user.entity';
import { TodoEntity } from './todo.entity';

@Entity({ name: 'list_todo' })
export class ListTodoEntity extends SharedEntity {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @Column({ type: 'varchar', unique: true })
  @Generated('uuid')
  uuid: string;

  @Column({ type: 'varchar', length: 50, unique: true })
  title: string;

  @Column({ type: 'varchar', length: 200 })
  description: string;

  @ManyToOne(() => UserEntity, (user) => user.listTodo)
  user: UserEntity;

  @OneToMany(() => TodoEntity, (todo) => todo.listTodo)
  todo: TodoEntity[];
}
