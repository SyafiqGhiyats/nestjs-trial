import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  customers = [
    {
      name: 'Syafiq GM',
      id: 1,
    },
    {
      name: 'John Doe',
      id: 2,
    },
  ];

  findCustomers() {
    return this.customers;
  }

  findCustomerById(id: number) {
    return this.customers.find((customer) => customer.id === id);
  }
}
