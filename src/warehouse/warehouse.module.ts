import { Module } from '@nestjs/common';
import { ConfigModule } from 'src/config/config.module';
import { WarehouseService } from './warehouse.service';
import { WarehouseController } from './warehouse.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Warehouse } from './entity/warehouse.entity';
import { KafkaModule } from 'src/kafka/kafka.module';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([Warehouse]), KafkaModule],
  providers: [WarehouseService],
  controllers: [WarehouseController],
})
export class WarehouseModule {}
