import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Address } from 'src/util/address/address.entity';
import { OrderItemDTO } from '../dto/order.item.dto';
import { OrderStatus } from '../util/order.status';

@Schema()
export class Order extends Document {
  @Prop({ required: true })
  customerId: string;

  @Prop({ type: [OrderItemDTO], required: true })
  items: Array<{ productId: string; quantity: number; price: number }>;

  @Prop({ default: OrderStatus.PROCESSING })
  status: OrderStatus;

  @Prop({ required: false })
  trackingId?: string;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;

  @Prop({ type: Address, required: true })
  destination: Address;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
