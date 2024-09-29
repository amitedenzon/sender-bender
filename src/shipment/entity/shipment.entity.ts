import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('shipment')
export class Shipment extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'text',
  })
  destination: string;

  @Column({
    type: 'text',
  })
  origin: string;

  @Column({
    type: 'float',
  })
  price: number;
}
