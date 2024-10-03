import { Column } from 'typeorm';

export class Address {
  @Column({ type: 'varchar' })
  streetName: string;

  @Column({ type: 'int' })
  streetNumber: number;

  @Column({ type: 'varchar' })
  city: string;

  @Column({ type: 'bigint' })
  postalCode: number;

  @Column({ type: 'varchar' })
  country: string;

  @Column({ nullable: true, type: 'int' })
  apartmentNumber?: number;

  @Column({ nullable: true, type: 'text' })
  additionalInfo?: string;
}
