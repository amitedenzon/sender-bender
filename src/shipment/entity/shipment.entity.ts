import { Address } from 'src/util/address.entity';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('shipment')
export class Shipment extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'text',
  })
  destination: Address;

  @Column({
    type: 'varchar',
  })
  trackingNumber: string;

  @Column({
    type: 'float',
  })
  price: number;
}
