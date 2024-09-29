import { IsBoolean, IsString } from 'class-validator';

export class CreateStockDto {
  @IsString()
  count: string;
  @IsString()
  name: string;
  @IsString()
  description: string;
  @IsBoolean()
  requiresCooling: boolean;
}
