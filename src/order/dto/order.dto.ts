import { Type } from 'class-transformer';
import {
  IsArray,
  IsDate,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Address } from 'src/util/address.entity';
import { OrderStatus } from '../util/order.status';

export class OrderDTO {
  @IsString()
  orderId: string;

  @IsString()
  customerId: string;

  @IsArray()
  items: OrderItemDTO[];

  @IsOptional()
  @IsString()
  trackingNumber?: string;

  @IsOptional()
  @IsString()
  shippingAddress?: string;

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

export class OrderItemDTO {
  @IsString()
  productId: string;

  @IsNumber()
  quantity: number;

  @IsNumber()
  price: number;
}
