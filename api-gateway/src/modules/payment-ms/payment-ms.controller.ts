import { Controller } from '@nestjs/common';
import { PaymentMsService } from './payment-ms.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('payment-ms')
@ApiTags('Payments')
export class PaymentMsController {
  constructor(private readonly paymentMsService: PaymentMsService) {}
}
