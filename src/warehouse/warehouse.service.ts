import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Warehouse } from './entity/warehouse.entity';
import { CreateWarehouseDto } from './dto/warehouse.dto';
import { Repository } from 'typeorm';

@Injectable()
export class WarehouseService {
  constructor(
    @InjectRepository(Warehouse)
    private warehouseRepository: Repository<Warehouse>,
  ) {}

  async create(warehouse: CreateWarehouseDto) {
    return await this.warehouseRepository.save(warehouse);
  }
}
