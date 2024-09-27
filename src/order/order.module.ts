import { Module } from '@nestjs/common';
import { ConfigModule } from 'src/config/config.module';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';

@Module({
    imports: [ConfigModule],
    providers: [OrderService],
    controllers: [OrderController]
})
export class OrderModule {}
