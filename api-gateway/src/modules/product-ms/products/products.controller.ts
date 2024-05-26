import { Controller, Get, Patch, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('products')
@ApiTags('Products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post('/new')
  createProduct() {
    return;
  }

  @Patch('/update/:id')
  updateProduct() {
    return;
  }

  @Get('/')
  findProducts() {
    return;
  }

  @Get('/:id')
  findOneProduct() {
    return;
  }
}
