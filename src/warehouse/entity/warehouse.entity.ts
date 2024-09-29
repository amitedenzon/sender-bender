import { Stock } from 'src/stock/entity/stock.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity } from 'typeorm';

@Entity('warehouse')
export class Warehouse extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  address: string;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @OneToMany(() => Stock, stock => stock.warehouse, { cascade: true })
  stock: Stock[];

  @Column({ type: 'int' })
  maxCapacity: number;
}
