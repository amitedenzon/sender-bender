import { Type } from 'class-transformer';
import { IsNumber, IsString, ValidateNested } from 'class-validator';
import { Address } from 'src/util/address.entity';

export class CreateShipmentDto {
  @ValidateNested()
  @Type(() => Address)
  destination: Address;

  @IsString()
  trackingNumber: string;

  @IsNumber()
  price: number;
}
