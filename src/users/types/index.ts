import { Exclude } from 'class-transformer';

export interface User {
  username: string;
  password: string;
  email: string;
}

export class SerializedUser {
  constructor(partial: Partial<SerializedUser>) {
    Object.assign(this, partial);
  }

  username: string;
  email: string;

  @Exclude()
  password: string;
}
