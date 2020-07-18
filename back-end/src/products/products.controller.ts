import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    constructor(){}
    @Get()
    getProducts(): string {
        return 'products';
    }
}
