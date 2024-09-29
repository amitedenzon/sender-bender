import { IsNumber, IsString } from 'class-validator';

export class CreateShipmentDto {
  @IsString()
  destination: string;
  @IsString()
  origin: string;
  @IsNumber()
  price: number;
}
