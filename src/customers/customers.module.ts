import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';
import { CustomerLoggerMiddleware } from './middlewares/customer-logger.middleware';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    //* This is how to enable middleware for all customer route and method
    consumer.apply(CustomerLoggerMiddleware).forRoutes(CustomersController);

    //* This is how to enable middleware for specific path
    // consumer.apply(CustomerLoggerMiddleware).forRoutes({
    //   path: 'customers',
    //   method: RequestMethod.POST,
    // });
  }
}
