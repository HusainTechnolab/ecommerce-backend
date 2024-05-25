import { PartialType } from '@nestjs/swagger';
import { CreateProductMDto } from './create-product-m.dto';

export class UpdateProductMDto extends PartialType(CreateProductMDto) {}
