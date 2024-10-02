import { Type } from 'class-transformer';
import {
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Address } from 'src/util/address.entity';

export class CreateShipmentDto {
  @ValidateNested()
  @Type(() => Address)
  destination: Address;

  @IsOptional()
  @IsString()
  trackingId: string;

  @IsNumber()
  price: number;
}
