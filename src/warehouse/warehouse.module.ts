import { Module } from '@nestjs/common';
import { ConfigModule } from 'src/config/config.module';
import { WarehouseService } from './warehouse.service';

@Module({
  imports: [ConfigModule],
  providers: [WarehouseService],
})
export class WarehouseModule {}
