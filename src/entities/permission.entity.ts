import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { SharedEntity } from '../shared/shared.entity';

@Entity({ name: 'permission' })
export class PermissionEntity extends SharedEntity {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @Column({ type: 'varchar', length: 50, unique: true })
  name: string;
}
