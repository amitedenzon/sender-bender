import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from 'src/config/config.module';
import { ShipmentModule } from 'src/shipment/shipment.module';
import { Order, OrderSchema } from './entity/order.entity';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
    ShipmentModule,
  ],
  providers: [OrderService],
  controllers: [OrderController],
})
export class OrderModule {}
