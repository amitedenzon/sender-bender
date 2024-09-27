import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('warehouse')
export class Warehouse extends BaseEntity {
  @PrimaryColumn({
    comment: 'Warehouse identifier',
    type: 'varchar',
  })
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
