import { IsNumber, IsString } from 'class-validator';

export class StockDTO {
  @IsString()
  productName: string;

  @IsNumber()
  quantity: number;

  @IsString()
  productCode: string;

  @IsString()
  warehouseId: string;
}
