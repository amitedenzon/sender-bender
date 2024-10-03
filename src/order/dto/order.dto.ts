import { Exclude, Type } from 'class-transformer';
import {
  IsArray,
  IsDate,
  IsEnum,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { AddressDto } from 'src/util/address/address.dto';
import { OrderStatus } from '../util/order.status';
import { OrderItemDTO } from './order.item.dto';

export class OrderDTO {
  @IsString()
  customerId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDTO)
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
  @Type(() => AddressDto)
  destination: AddressDto;
}
