import { Module } from '@nestjs/common';
import { ConfigModule } from 'src/config/config.module';
import { WarehouseService } from './warehouse.service';
import { WarehouseController } from './warehouse.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Warehouse } from './entity/warehouse.entity';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([Warehouse])],
  providers: [WarehouseService],
  controllers: [WarehouseController],
})
export class WarehouseModule {}
