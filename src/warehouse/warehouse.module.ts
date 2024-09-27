import { Module } from '@nestjs/common';
import { ConfigModule } from 'src/config/config.module';
import { WarehouseService } from './warehouse.service';
import { WarehouseController } from './warehouse.controller';

@Module({
  imports: [ConfigModule],
  providers: [WarehouseService],
  controllers: [WarehouseController],
})
export class WarehouseModule {}
