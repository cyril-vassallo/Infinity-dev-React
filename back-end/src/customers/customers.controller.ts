import { Controller, Get } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { Customer } from './customer.entity';




@Controller('customers')
export class CustomersController {
  constructor(private customerService: CustomersService){}
  
  @Get()
  getCustomers() : Promise<Customer[]> {
      return this.customerService.findAll();
    }
}
