import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { OrderDTO } from './dto/order.dto';
import { UpdateOrderDto } from './dto/update.order.dto';
import { Order } from './entity/order.entity';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Get('/get')
  async findAll(): Promise<Order[]> {
    return await this.orderService.findAll();
  }

  @Get('/get/:id')
  async findById(@Param('id') id: string): Promise<Order> {
    return await this.orderService.findById(id);
  }

  @Post('/create')
  @UsePipes(ValidationPipe)
  async create(@Body() orderData: OrderDTO) {
    return await this.orderService.create(orderData);
  }

  @Post('/update')
  @UsePipes(ValidationPipe)
  async update(@Body() orderData: UpdateOrderDto) {
    return await this.orderService.update(orderData);
  }

  @Delete('/delete/:id')
  async delete(@Param('id') id: string) {
    return await this.orderService.delete(id);
  }
}
