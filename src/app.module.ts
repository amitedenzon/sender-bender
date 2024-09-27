import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheModule } from '@nestjs/cache-manager';
import { ShipmentModule } from './shipment/shipment.module';
import { OrderModule } from './order/order.module';
import { WarehouseModule } from './warehouse/warehouse.module';
import { NotificationModule } from './notification/notification.module';
 
@Module({
  imports: [
    CacheModule.register({ isGlobal: true }),
    ShipmentModule,
    OrderModule,
    WarehouseModule,
    NotificationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
