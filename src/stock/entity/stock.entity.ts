import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('stock')
export class Stock extends BaseEntity {
  @PrimaryColumn({
    comment: 'Stock identifier',
    type: 'varchar',
  })
  id: string;

  @Column({
    type: 'int',
  })
  count: string;

  @Column({
    type: 'varchar',
  })
  name: string;

  @Column({
    type: 'text',
  })
  description: string;

  @Column({
    type: 'boolean',
  })
  requiresCooling: boolean;
}
