import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { CreateCategoryDto } from './dto/create-category-dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('categories')
@ApiTags('Categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post('/new')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: 'src/images/categories',
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  @ApiBody({ type: CreateCategoryDto })
  createCategory(
    @Req() req: { log; user },
    @Body() body: CreateCategoryDto,
    @UploadedFile() image: Express.Multer.File,
  ) {
    body.image = image ? image.path : null;
    return this.categoriesService.createCategory(req, body);
  }

  @Patch('/update/:id')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: 'src/images/categories',
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  updateCategory(
    @Param('id') id:string,
    @Req() req: { log; user },
    @Body() body: UpdateCategoryDto,
    @UploadedFile() image: Express.Multer.File,
  ) {
    body.image = image ? image.path : null;
    return this.categoriesService.updateCategory(req, id, body);
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
