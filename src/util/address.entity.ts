import { IsNumber, IsOptional, IsString } from 'class-validator';

export class Address {
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
  @IsString()
  apartmentNumber?: string;

  @IsOptional()
  @IsString()
  additionalInfo?: string;
}
