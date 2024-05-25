import { Injectable } from '@nestjs/common';
import { CreateProductMDto } from './dto/create-product-m.dto';
import { UpdateProductMDto } from './dto/update-product-m.dto';

@Injectable()
export class ProductMsService {
  create(createProductMDto: CreateProductMDto) {
    return 'This action adds a new productM';
  }

  findAll() {
    return `This action returns all productMs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productM`;
  }

  update(id: number, updateProductMDto: UpdateProductMDto) {
    return `This action updates a #${id} productM`;
  }

  remove(id: number) {
    return `This action removes a #${id} productM`;
  }
}
