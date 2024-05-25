import { Module } from '@nestjs/common';
import { ProductMsService } from './product-ms.service';
import { ProductMsController } from './product-ms.controller';

@Module({
  controllers: [ProductMsController],
  providers: [ProductMsService],
})
export class ProductMsModule {}
