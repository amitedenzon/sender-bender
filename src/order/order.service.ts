import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { randomUUID } from 'crypto';
import { Model } from 'mongoose';
import { CreateShipmentDto } from 'src/shipment/dto/shipment.dto';
import { ShipmentService } from 'src/shipment/shipment.service';
import { OrderDTO } from './dto/order.dto';
import { UpdateOrderDto } from './dto/update.order.dto';
import { Order } from './entity/order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private readonly orderModel: Model<Order>,
    private readonly shipmentService: ShipmentService,
  ) {}

  async findAll(): Promise<Order[]> {
    return await this.orderModel.find();
  }

  async findById(id: string): Promise<Order> {
    const order = await this.orderModel.findById(id);

    if (!order) {
      throw new NotFoundException('Order not found');
    }

    return order;
  }

  async create(orderData: OrderDTO): Promise<Order> {
    orderData.trackingId = randomUUID();

    const price = orderData.items.reduce(
      (total, item) => total + item.price,
      0,
    );

    const newShipment: CreateShipmentDto = {
      destination: orderData.destination,
      trackingId: orderData.trackingId,
      price,
    };

    await this.shipmentService.create(newShipment);

    return await this.orderModel.create(orderData);
  }

  async update(orderData: UpdateOrderDto): Promise<Order> {
    const { id, ...updateFields } = orderData;

    const updatedOrder = await this.orderModel.findByIdAndUpdate(
      id,
      { $set: updateFields },
      { new: true, runValidators: true },
    );

    if (!updatedOrder) {
      throw new NotFoundException('Order not found');
    }

    return updatedOrder;
  }

  async delete(id: string): Promise<void> {
    const deletedOrder = await this.orderModel.findByIdAndDelete(id);

    if (!deletedOrder) {
      throw new NotFoundException('Order not found');
    }
  }
}
