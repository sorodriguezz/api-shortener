import {
  Column,
  Entity,
  Generated,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SharedEntity } from './shared.entity';
import { GroupLinkEntity } from './group-link.entity';
import { TagEntity } from './tag.entity';

@Entity({ name: 'link' })
export class LinkEntity extends SharedEntity {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @Column({ type: 'varchar', unique: true })
  @Generated('uuid')
  uuid: string;

  @Column({ type: 'varchar', length: 50, unique: true })
  title: string;

  @Column({ type: 'varchar', length: 200 })
  description: string;

  @Column({ type: 'varchar', length: 500 })
  url: string;

  @Column({ type: 'varchar', length: 255 })
  image: string;

  @ManyToOne(() => GroupLinkEntity, (groupLink) => groupLink.link)
  groupLink: GroupLinkEntity;

  @ManyToMany(() => TagEntity)
  @JoinTable()
  tags: TagEntity[];
}
