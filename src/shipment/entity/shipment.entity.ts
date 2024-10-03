import { Address } from 'src/util/address/address.entity';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('shipment')
export class Shipment extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column(() => Address, { prefix: 'destination_' })
  destination: Address;

  @Column({
    type: 'varchar',
  })
  trackingId: string;

  @Column({
    type: 'float',
  })
  price: number;
}
