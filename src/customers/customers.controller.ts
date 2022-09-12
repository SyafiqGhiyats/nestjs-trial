import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dtos/CreateCustomer.dto';

@ApiTags('Customers')
@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}
  @ApiOkResponse({
    description: 'Successfully get all customers',
    type: CreateCustomerDto,
  })
  @Get('')
  getCustomers() {
    return this.customersService.findCustomers();
  }

  @Get(':id')
  searchCustomerById(@Param('id', ParseIntPipe) id: number) {
    const customer = this.customersService.findCustomerById(id);
    if (customer) return customer;
    else throw new HttpException('Customer not found', HttpStatus.NOT_FOUND);
  }

  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
  })
  @Post('')
  //* There are 2 way to validate body
  // @UsePipes(ValidationPipe)
  createCustomer(
    @Body(new ValidationPipe()) createCustomerDto: CreateCustomerDto
  ) {
    this.customersService.createCustomer(createCustomerDto);
  }
}
