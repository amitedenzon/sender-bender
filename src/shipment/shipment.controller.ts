import { ShipmentService } from './shipment.service';
import { Controller } from '@nestjs/common';

@Controller('shipment')
export class ShipmentController {
  constructor(private shipmentService: ShipmentService) {}
}
