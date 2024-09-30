import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ConsumerService } from './consumer/consumer.service';
import { ProducerService } from './producer/producer.service';

@Controller('kafka')
export class KafkaController {
  constructor(
    private readonly producerService: ProducerService,
    private readonly consumerService: ConsumerService,
  ) {}
  @Post('send/:topic')
  async sendKafkaMessage(
    @Param('topic') topic: string,
    @Body() message: { value: string },
  ) {
    await this.producerService.produce({
      topic,
      messages: [{ value: message.value }],
    });
  }

  @Get('consumeMessages/:topic')
  async consumeKafkaMessages(@Param('topic') topic: string) {
    await this.consumerService.consumeMessages(topic);
  }
}
