import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateCustomerAddressDto } from './CreateCustomerAddress.dto';

export class CreateCustomerDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => CreateCustomerAddressDto)
  address: CreateCustomerAddressDto;
}
