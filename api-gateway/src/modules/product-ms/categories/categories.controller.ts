import { Controller, Get, Patch, Post } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('categories')
@ApiTags('Categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post('/new')
  createCategory(){
    return;
  }

  @Patch('/update/:id')
  updateCategory() {
    return;
  }

  @Get('/')
  findCategories() {
    return;
  }

  @Get('/:id')
  findOneCategory() {
    return;
  }
}
