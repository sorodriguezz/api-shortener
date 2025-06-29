import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class SharedEntity {
  @CreateDateColumn({ type: 'date' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'date' })
  updatedAt: Date;
}
