import { Exclude, Type } from 'class-transformer';
import {
  IsArray,
  IsDate,
  IsEnum,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Address } from 'src/util/address.entity';
import { OrderStatus } from '../util/order.status';
import { OrderItemDTO } from './order.item.dto';

export class OrderDTO {
  @IsString()
  customerId: string;

  @IsArray()
  items: OrderItemDTO[];

  @Exclude()
  trackingId?: string;

  @Type(() => Date)
  @IsDate()
  createdAt: Date;

  @IsOptional()
  @IsEnum(OrderStatus)
  status?: OrderStatus;

  @IsOptional()
  @ValidateNested()
  @Type(() => Address)
  destination: Address;
}
