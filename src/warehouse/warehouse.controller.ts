import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateWarehouseDto } from './dto/warehouse.dto';
import { WarehouseService } from './warehouse.service';

@Controller('warehouse')
export class WarehouseController {
  constructor(private warehouseService: WarehouseService) {}

  @Post('/create')
  @UsePipes(ValidationPipe)
  async create(@Body() warehouseData: CreateWarehouseDto) {
    return await this.warehouseService.create(warehouseData);
  }
}
