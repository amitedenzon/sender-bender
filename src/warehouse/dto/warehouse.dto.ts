import { IsString } from 'class-validator';

export class CreateWarehouseDto {
  @IsString()
  address: string;
  @IsString()
  name: string;
}
