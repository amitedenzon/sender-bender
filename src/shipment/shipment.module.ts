import { Module } from '@nestjs/common';
import { ConfigModule } from 'src/config/config.module';
import { ShipmentService } from './shipment.service';
import { ShipmentController } from './shipment.controller';

@Module({
    imports: [ConfigModule],
    providers: [ShipmentService],
    controllers: [ShipmentController]
})
export class ShipmentModule {}
