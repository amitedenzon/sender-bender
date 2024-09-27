import { Module } from '@nestjs/common';
import { ConfigModule } from 'src/config/config.module';
import { OrderService } from './order.service';

@Module({
    imports: [ConfigModule],
    providers: [OrderService]
})
export class OrderModule {}
