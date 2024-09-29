import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { OrderDTO } from './dto/order.dto';
import { Order } from './entity/order.entity';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Post('/create')
  @UsePipes(ValidationPipe)
  async create(@Body() orderData: OrderDTO) {
    return await this.orderService.create(orderData);
  }

  @Get('/get')
  async findAll(): Promise<Order[]> {
    return await this.orderService.findAll();
  }
}
