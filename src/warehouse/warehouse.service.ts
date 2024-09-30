import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConsumerService } from './../kafka/consumer/consumer.service';
import { CreateWarehouseDto } from './dto/warehouse.dto';
import { Warehouse } from './entity/warehouse.entity';

@Injectable()
export class WarehouseService implements OnModuleInit {
  constructor(
    @InjectRepository(Warehouse)
    private warehouseRepository: Repository<Warehouse>,
    private readonly consumerService: ConsumerService,
  ) {}

  async onModuleInit() {
    await this.consumerService.consume(
      { topics: ['test'] },
      {
        eachMessage: async ({ topic, partition, message }) => {
          console.log({
            value: message.value.toString(),
            topic: topic.toString(),
            partition: partition.toString(),
          });
        },
      },
    );
  }

  async create(warehouse: CreateWarehouseDto) {
    return await this.warehouseRepository.save(warehouse);
  }
}
