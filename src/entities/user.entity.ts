import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SharedEntity } from '../shared/shared.entity';
import { RoleEntity } from './role.entity';
import { GroupLinkEntity } from './group-link.entity';
import { ListTodoEntity } from './list-todo.entity';

@Entity({ name: 'user' })
export class UserEntity extends SharedEntity {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'varchar', length: 50 })
  lastname: string;

  @Column({ type: 'varchar', length: 100, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 100 })
  password: string;

  @Column({ name: 'is_enable,', type: 'boolean', default: true })
  isEnable: boolean;

  @ManyToMany(() => RoleEntity)
  @JoinTable()
  roles: RoleEntity[];

  @OneToMany(() => GroupLinkEntity, (groupLink) => groupLink.user)
  groupLink: GroupLinkEntity[];

  @OneToMany(() => ListTodoEntity, (listTodo) => listTodo.user)
  listTodo: ListTodoEntity[];
}
