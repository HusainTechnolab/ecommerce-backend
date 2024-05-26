import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IPayload } from 'src/utils/interfaces/payload.interface';
import { Categories } from './schema/categories.schema';
import mongoose, { Model, Mongoose } from 'mongoose';
import { RESPONSE } from 'src/utils/constants';
import { ResponseFormatter } from 'src/utils/response.formatter';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Categories.name)
    private readonly categoriesModel: Model<Categories>,
  ) {}

  async create(payload: IPayload): Promise<any> {
    try {
      const { data } = payload;
      const isExitsCategory = await this.categoriesModel
        .findOne({ name: data.name.toLowerCase() })
        .exec();
      if (isExitsCategory) {
        throw new BadRequestException(RESPONSE.MESSAGE.CATEGORIES.EXITS);
      }
      const categories = new Categories();
      categories.name = data.name.toLowerCase();
      categories.description = data.description;
      categories.image = data.image;
      const result = await this.categoriesModel.create(categories);

      return new ResponseFormatter(
        HttpStatus.CREATED,
        RESPONSE.MESSAGE.CATEGORIES.CREATE,
        null,
        result,
      );
    } catch (error) {
      throw new RpcException({
        message: error.message,
        status: error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      });
    }
  }

  async update(payload: IPayload): Promise<any> {
    try {
      const { data } = payload;
      const category = await this.categoriesModel
        .findOne({ _id: data.id })
        .exec();
      if (!category) {
        throw new BadRequestException(RESPONSE.MESSAGE.NOT_FOUND);
      }
      category.name = data.name ? data.name.toLowerCase() : category.name;
      category.description = data.description ? data.description : category.description;
      category.image = data.image ? data.image : category.image;
      category.isActive = data.isActive;
      const result = await this.categoriesModel.create(category);

      return new ResponseFormatter(
        HttpStatus.ACCEPTED,
        RESPONSE.MESSAGE.CATEGORIES.UPDATE,
        null,
        result,
      );
    } catch (error) {
      throw new RpcException({
        message: error.message,
        status: error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      });
    }
  }
}
