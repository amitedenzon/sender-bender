import { WarehouseService } from './warehouse.service';
import { Controller } from '@nestjs/common';

@Controller('warehouse')
export class WarehouseController {
  constructor(private warehouseService: WarehouseService) {}

  
}
