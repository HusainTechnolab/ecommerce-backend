import { Controller } from '@nestjs/common';
import { ProductsService } from './products.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import { MICRO_SERVICE } from 'src/utils/constants';
import { IPayload } from 'src/utils/interfaces/payload.interface';

@Controller()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @EventPattern({ cmd: MICRO_SERVICE.PRODUCTS.EVENTS.CREATE })
  createProduct(@Payload() payload: IPayload) {
    return;
  }

  @EventPattern({ cmd: MICRO_SERVICE.PRODUCTS.EVENTS.UPDATE })
  updateProduct(@Payload() payload: IPayload) {
    return;
  }

  @EventPattern({ cmd: MICRO_SERVICE.PRODUCTS.EVENTS.FIND_ALL })
  findProducts(@Payload() payload: IPayload) {
    return;
  }

  @EventPattern({ cmd: MICRO_SERVICE.PRODUCTS.EVENTS.FIND_ONE })
  findOneProduct(@Payload() payload: IPayload) {
    return;
  }

  @EventPattern({ cmd: MICRO_SERVICE.PRODUCTS.EVENTS.DELETE })
  deleteProduct(@Payload() payload: IPayload) {
    return;
  }
}
