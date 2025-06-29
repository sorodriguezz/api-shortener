import { SharedEntity } from './../shared/shared.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ListTodoEntity } from './list-todo.entity';
import { TagTodoEntity } from './tag-todo.entity';

@Entity({ name: 'todo' })
export class TodoEntity extends SharedEntity {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @Column({ type: 'varchar', length: 50, unique: true })
  title: string;

  @Column({ type: 'varchar', length: 255 })
  description: string;

  @Column({
    name: 'expiration_date',
    type: 'date',
  })
  expirationDate: Date;

  @Column({
    name: 'is_completed',
    type: 'boolean',
  })
  isCompleted: boolean;

  @ManyToOne(() => ListTodoEntity, (listTodo) => listTodo.todo)
  listTodo: ListTodoEntity;

  @ManyToMany(() => TagTodoEntity)
  @JoinTable()
  tags: TagTodoEntity[];
}
