export interface ICustomer {
  id: number;
  email: string;
  name: string;
  address: ICustomerAddress;
}

interface ICustomerAddress {
  zip?: number;
  city: string;
  state: string;
}
