import { Module } from '@nestjs/common';
import { CustomersController } from './customers/customers.controller';
import { CustomersService } from './customers/customers.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class AppModule {}
