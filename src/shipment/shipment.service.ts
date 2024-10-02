import { CACHE_MANAGER, CacheStore } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateShipmentDto } from './dto/shipment.dto';
import { Shipment } from './entity/shipment.entity';

@Injectable()
export class ShipmentService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: CacheStore,
    @InjectRepository(Shipment)
    private shipmentRepository: Repository<Shipment>,
  ) {}

  async create(shipment: CreateShipmentDto) {
    const newShipment: Shipment = await this.shipmentRepository.save(shipment);
    await this.cacheManager.set(newShipment.id, newShipment);

    return newShipment;
  }

  async findById(id: string): Promise<Shipment> {
    const cachedShipment = await this.cacheManager.get(id);
    if (cachedShipment) {
      return cachedShipment as Shipment;
    }

    const shipment = await this.shipmentRepository.findOneBy({ id });
    if (shipment) {
      await this.cacheManager.set(id, shipment);
    }

    return shipment;
  }
}
