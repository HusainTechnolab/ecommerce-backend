import { Controller, Get, Patch, Post } from '@nestjs/common';
import { SubCategoriesService } from './sub-categories.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('sub-categories')
@ApiTags('Sub-Categories')
export class SubCategoriesController {
  constructor(private readonly subCategoriesService: SubCategoriesService) {}

  @Post('/new')
  createSubCategory() {
    return;
  }

  @Patch('/update/:id')
  updateSubCategory() {
    return;
  }

  @Get('/')
  findSubCategories() {
    return;
  }

  @Get('/:id')
  findOneSubCategory() {
    return;
  }
}
