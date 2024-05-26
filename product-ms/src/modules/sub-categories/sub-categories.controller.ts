import { Controller } from '@nestjs/common';
import { SubCategoriesService } from './sub-categories.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import { MICRO_SERVICE } from 'src/utils/constants';
import { IPayload } from 'src/utils/interfaces/payload.interface';

@Controller()
export class SubCategoriesController {
  constructor(private readonly subCategoriesService: SubCategoriesService) {}

  @EventPattern({ cmd: MICRO_SERVICE.SUB_CATEGORIES.EVENTS.CREATE })
  createSubCategory(@Payload() payload: IPayload) {
    return;
  }

  @EventPattern({ cmd: MICRO_SERVICE.SUB_CATEGORIES.EVENTS.UPDATE })
  updateSubCategory(@Payload() payload: IPayload) {
    return;
  }

  @EventPattern({ cmd: MICRO_SERVICE.SUB_CATEGORIES.EVENTS.FIND_ALL })
  findSubCategories(@Payload() payload: IPayload) {
    return;
  }

  @EventPattern({ cmd: MICRO_SERVICE.SUB_CATEGORIES.EVENTS.FIND_ONE })
  findOneSubCategory(@Payload() payload: IPayload) {
    return;
  }

  @EventPattern({ cmd: MICRO_SERVICE.SUB_CATEGORIES.EVENTS.DELETE })
  deleteSubCategory(@Payload() payload: IPayload) {
    return;
  }
}
