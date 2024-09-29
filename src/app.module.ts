import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as redisStore from 'cache-manager-redis-store';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { NotificationModule } from './notification/notification.module';
import { OrderModule } from './order/order.module';
import { ShipmentModule } from './shipment/shipment.module';
import { StockModule } from './stock/stock.module';
import { WarehouseModule } from './warehouse/warehouse.module';

@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
      store: redisStore,
      host: 'localhost',
      port: 6379,
    }),
    ShipmentModule,
    OrderModule,
    WarehouseModule,
    NotificationModule,
    MongooseModule.forRoot('mongodb://localhost/27017'),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) =>
        configService.postgres,
      inject: [ConfigService],
    }),
    StockModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
