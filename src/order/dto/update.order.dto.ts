import { Type } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Address } from 'src/util/address.entity';
import { OrderStatus } from '../util/order.status';

export class UpdateOrderDto {
  @IsString()
  id: string;

  @IsOptional()
  @IsEnum(OrderStatus)
  status?: OrderStatus;

  @IsOptional()
  @IsString()
  trackingId?: string;

  @IsOptional()
  @IsArray()
  items?: Array<{ productId: string; quantity: number; price: number }>;

  @IsOptional()
  @ValidateNested()
  @Type(() => Address)
  destination: Address;
}
