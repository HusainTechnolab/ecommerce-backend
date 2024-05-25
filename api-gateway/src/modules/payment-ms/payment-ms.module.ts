import { Module } from '@nestjs/common';
import { PaymentMsService } from './payment-ms.service';
import { PaymentMsController } from './payment-ms.controller';

@Module({
  controllers: [PaymentMsController],
  providers: [PaymentMsService],
})
export class PaymentMsModule {}
