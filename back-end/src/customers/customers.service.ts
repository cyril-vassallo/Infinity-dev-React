import { Injectable } from '@nestjs/common';
import { Customer } from './customer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomerDto } from './customer.dto';

@Injectable()
export class CustomersService {
    constructor(@InjectRepository(Customer) private customerRepository: Repository<Customer>){}

    findAll():Promise<Customer[]> {
        return this.customerRepository.find();
    }

}
