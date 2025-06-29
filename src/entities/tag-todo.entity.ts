import { SharedEntity } from './../shared/shared.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tag_todo' })
export class TagTodoEntity extends SharedEntity {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @Column({ type: 'varchar', length: 50, unique: true })
  title: string;

  @Column({ type: 'varchar', length: 50, unique: true })
  color: string;
}
