import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { SharedEntity } from '../shared/shared.entity';

@Entity({ name: 'tag-link' })
export class TagLinkEntity extends SharedEntity {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @Column({ type: 'varchar', length: 50, unique: true })
  title: string;

  @Column({ type: 'varchar', length: 50, unique: true })
  color: string;
}
