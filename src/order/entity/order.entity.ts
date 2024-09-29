import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { OrderStatus } from '../util/order.status';

@Schema()
export class Order extends Document {
  @Prop({ required: true })
  orderId: string;

  @Prop({ required: true })
  customerId: string;

  @Prop({ type: [Object], required: true })
  items: Array<{ productId: string; quantity: number; price: number }>;

  @Prop({ default: OrderStatus.PROCESSING })
  status: OrderStatus;

  @Prop({ required: false })
  trackingNumber?: string;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
