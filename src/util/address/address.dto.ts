import { IsNumber, IsOptional, IsString } from 'class-validator';

export class AddressDto {
  @IsString()
  streetName: string;

  @IsNumber()
  streetNumber: number;

  @IsString()
  city: string;

  @IsNumber()
  postalCode: number;

  @IsString()
  country: string;

  @IsOptional()
  @IsNumber()
  apartmentNumber?: number;

  @IsOptional()
  @IsString()
  additionalInfo?: string;
}
