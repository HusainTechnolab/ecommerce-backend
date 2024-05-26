import { Controller } from '@nestjs/common';
import { SubCategoriesService } from './sub-categories.service';

@Controller()
export class SubCategoriesController {
  constructor(private readonly subCategoriesService: SubCategoriesService) {}
}
