import { KafkaController } from './../../src/kafka/kafka.controller';
import { Test, TestingModule } from '@nestjs/testing';

describe('KafkaController', () => {
  let controller: KafkaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KafkaController],
    }).compile();

    controller = module.get<KafkaController>(KafkaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
