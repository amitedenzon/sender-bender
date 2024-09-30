import { Injectable } from '@nestjs/common';
import { ProducerService } from './../kafka/producer/producer.service';

@Injectable()
export class NotificationService {
  constructor(private readonly producerService: ProducerService) {}

  async notify() {
    await this.producerService.produce({
      topic: 'test',
      messages: [
        {
          value: 'notification',
        },
      ],
    });

    return 'notification';
  }
}
