import { Module } from '@nestjs/common';
import { ConfigModule } from 'src/config/config.module';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';

@Module({
    imports: [ConfigModule],
    controllers: [NotificationController],
    providers: [NotificationService]
})
export class NotificationModule {}
