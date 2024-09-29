import { Warehouse } from 'src/warehouse/entity/warehouse.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('stock')
export class Stock {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100 })
  productName: string;

  @Column({ type: 'int' })
  quantity: number;

  @Column({ type: 'varchar', length: 50 })
  productCode: string;

  @ManyToOne(() => Warehouse, (warehouse) => warehouse.stock)
  warehouse: Warehouse;
}
