import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OrderDTO } from './dto/order.dto';
import { Order } from './entity/order.entity';

@Injectable()
export class OrderService {
  constructor(@InjectModel(Order.name) private orderModel: Model<Order>) {}

  async findAll(): Promise<Order[]> {
    return this.orderModel.find().exec();
  }

  async create(orderData: OrderDTO): Promise<Order> {
    return this.orderModel.create(orderData);
  }
}
