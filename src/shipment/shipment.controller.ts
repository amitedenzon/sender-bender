import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateShipmentDto } from './dto/shipment.dto';
import { Shipment } from './entity/shipment.entity';
import { ShipmentService } from './shipment.service';

@Controller('shipment')
export class ShipmentController {
  constructor(private readonly shipmentService: ShipmentService) {}

  @Post('/create')
  @UsePipes(ValidationPipe)
  async create(@Body() shipmentData: CreateShipmentDto) {
    return await this.shipmentService.create(shipmentData);
  }

  @Get('/get/:id')
  async findById(@Param('id') id: string): Promise<Shipment> {
    return await this.shipmentService.findById(id);
  }
}
