import { Module } from '@nestjs/common';
import { ConfigModule } from 'src/config/config.module';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { KafkaModule } from 'src/kafka/kafka.module';

@Module({
  imports: [ConfigModule, KafkaModule],
  controllers: [NotificationController],
  providers: [NotificationService],
})
export class NotificationModule {}
