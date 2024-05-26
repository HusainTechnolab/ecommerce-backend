import { HttpException, Inject, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category-dto';
import { MICRO_SERVICE } from 'src/utils/constants';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @Inject(MICRO_SERVICE.CATEGORIES.NAME)
    private readonly categoriesClientServices: ClientProxy,
  ) {}

  createCategory(req: { log; user }, data: CreateCategoryDto) {
    return firstValueFrom(
      this.categoriesClientServices.send(
        { cmd: MICRO_SERVICE.CATEGORIES.EVENTS.CREATE },
        { log: req.log, data },
      ),
    ).catch((error) => {
      throw new HttpException(error.message, error.status);
    });
  }

  updateCategory(req: { log; user }, id:string, data: UpdateCategoryDto) {
    return firstValueFrom(
      this.categoriesClientServices.send(
        { cmd: MICRO_SERVICE.CATEGORIES.EVENTS.UPDATE },
        { log: req.log, data:{...data,id} },
      ),
    ).catch((error) => {
      throw new HttpException(error.message, error.status);
    });
  }
}
