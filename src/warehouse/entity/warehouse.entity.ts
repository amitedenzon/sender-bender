import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('warehouse')
export class Warehouse extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'text',
  })
  address: string;

  @Column({
    type: 'varchar',
  })
  name: string;
}
