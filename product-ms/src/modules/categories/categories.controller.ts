import { Controller } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import { MICRO_SERVICE } from 'src/utils/constants';
import { IPayload } from 'src/utils/interfaces/payload.interface';

@Controller()
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @EventPattern({ cmd: MICRO_SERVICE.CATEGORIES.EVENTS.CREATE })
  createCategory(@Payload() payload: IPayload) {
    return this.categoriesService.create(payload);
  }

  @EventPattern({ cmd: MICRO_SERVICE.CATEGORIES.EVENTS.UPDATE })
  updateCategory(@Payload() payload: IPayload) {
    return this.categoriesService.update(payload);
  }

  @EventPattern({ cmd: MICRO_SERVICE.CATEGORIES.EVENTS.FIND_ALL })
  findCategories(@Payload() payload: IPayload) {
    return;
  }

  @EventPattern({ cmd: MICRO_SERVICE.CATEGORIES.EVENTS.FIND_ONE })
  findOneCategory(@Payload() payload: IPayload) {
    return;
  }

  @EventPattern({ cmd: MICRO_SERVICE.CATEGORIES.EVENTS.DELETE })
  deleteCategory(@Payload() payload: IPayload) {
    return;
  }
}
