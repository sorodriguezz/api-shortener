import {
  Column,
  Entity,
  Generated,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SharedEntity } from '../shared/shared.entity';
import { UserEntity } from './user.entity';
import { LinkEntity } from './link.entity';

@Entity({ name: 'group_link' })
export class GroupLinkEntity extends SharedEntity {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @Column({ type: 'varchar', unique: true })
  @Generated('uuid')
  uuid: string;

  @Column({ type: 'varchar', length: 50, unique: true })
  title: string;

  @Column({ type: 'varchar', length: 255 })
  description: string;

  @ManyToOne(() => UserEntity, (user) => user.groupLink)
  user: UserEntity;

  @OneToMany(() => LinkEntity, (link) => link.groupLink)
  link: LinkEntity[];
}
