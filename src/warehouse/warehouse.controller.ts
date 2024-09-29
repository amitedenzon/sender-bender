import { CreateWarehouseDto } from './dto/warehouse.dto';
import { WarehouseService } from './warehouse.service';
import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

@Controller('warehouse')
export class WarehouseController {
  constructor(private warehouseService: WarehouseService) {}

  @Post('/create')
  @UsePipes(ValidationPipe)
  async createWarehouse(@Body() warehouseData: CreateWarehouseDto) {
    return await this.warehouseService.createNewWarehouse(warehouseData);
  }
}
