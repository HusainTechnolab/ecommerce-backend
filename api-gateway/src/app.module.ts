import { Module } from '@nestjs/common';
import { ProductMsModule } from './modules/product-ms/product-ms.module';
import { UserMsModule } from './modules/user-ms/user-ms.module';
import { PaymentMsModule } from './modules/payment-ms/payment-ms.module';
import { AuthMsModule } from './modules/auth-ms/auth-ms.module';

@Module({
  imports: [AuthMsModule, UserMsModule, ProductMsModule, PaymentMsModule],
})
export class AppModule {}
