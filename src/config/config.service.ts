import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import * as redisStore from 'cache-manager-redis-store';

@Injectable()
export class ConfigService {
  postgres: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '231202',
    database: 'warehouse',
    synchronize: true,
    autoLoadEntities: true,
    entities: [join(__dirname, '..', '*', 'entity', '**', '*.entity.{ts,js}')],
  };

  redis = {
    isGlobal: true,
    host: 'localhost',
    port: 6379,
  };
}
