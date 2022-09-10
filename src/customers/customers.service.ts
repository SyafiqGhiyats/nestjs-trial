import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dtos/CreateCustomer.dto';
import { ICustomer } from './types/Customer';

@Injectable()
export class CustomersService {
  private customers: Array<ICustomer> = [
    {
      id: 1,
      name: 'Syafiq GM',
      email: 'syafiqgm@gmail.com',
    },
    {
      id: 2,
      name: 'John Doe',
      email: 'johndoe@gmail.com',
    },
  ];

  findCustomers() {
    return this.customers;
  }

  findCustomerById(id: number) {
    return this.customers.find((customer) => customer.id === id);
  }

  createCustomer(customerDto: CreateCustomerDto) {
    this.customers.push(customerDto);
  }
}
