import { Module } from '@nestjs/common';
import { PaymentMsModule } from './modules/payment-ms/payment-ms.module';
import { AuthMsModule } from './modules/auth-ms/auth-ms.module';
import { CategoriesModule } from './modules/product-ms/categories/categories.module';
import { SubCategoriesModule } from './modules/product-ms/sub-categories/sub-categories.module';
import { ProductsModule } from './modules/product-ms/products/products.module';

@Module({
  imports: [
    AuthMsModule,
    CategoriesModule,
    SubCategoriesModule,
    ProductsModule,
    PaymentMsModule,
  ],
})
export class AppModule {}
