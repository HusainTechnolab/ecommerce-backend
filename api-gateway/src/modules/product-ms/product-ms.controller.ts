import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductMsService } from './product-ms.service';
import { CreateProductMDto } from './dto/create-product-m.dto';
import { UpdateProductMDto } from './dto/update-product-m.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('product-ms')
@ApiTags('Product')
export class ProductMsController {
  constructor(private readonly productMsService: ProductMsService) {}

  @Post()
  create(@Body() createProductMDto: CreateProductMDto) {
    return this.productMsService.create(createProductMDto);
  }

  @Get()
  findAll() {
    return this.productMsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productMsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductMDto: UpdateProductMDto,
  ) {
    return this.productMsService.update(+id, updateProductMDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productMsService.remove(+id);
  }
}
