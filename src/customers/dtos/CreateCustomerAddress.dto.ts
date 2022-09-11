import { IsNotEmpty } from 'class-validator';

export class CreateCustomerAddressDto {
  zip?: number;

  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  state: string;
}
