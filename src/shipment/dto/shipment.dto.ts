import { Type } from 'class-transformer';
import {
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { AddressDto } from 'src/util/address/address.dto';

export class CreateShipmentDto {
  @ValidateNested()
  @Type(() => AddressDto)
  destination: AddressDto;

  @IsOptional()
  @IsString()
  trackingId: string;

  @IsNumber()
  price: number;
}
