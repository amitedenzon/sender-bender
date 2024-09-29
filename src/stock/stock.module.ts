import { Module } from '@nestjs/common';
import { StockService } from './stock.service';
import { StockController } from './stock.controller';
import { ConfigModule } from 'src/config/config.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Stock } from './entity/stock.entity';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([Stock])],
  providers: [StockService],
  controllers: [StockController],
})
export class StockModule {}
