import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Categories } from 'src/modules/categories/schema/categories.schema';
import { SubCategories } from 'src/modules/sub-categories/schema/sub-categories.schema';

export type ProductsDocument = HydratedDocument<Products>;

@Schema({ timestamps: true })
export class Products {
  @Prop()
  name: string;

  @Prop({ required: false, default: null })
  description: string;

  @Prop({ required: false, default: null })
  image: string[];

  @Prop({ type: 'number' })
  price: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Categories' })
  categoryId: Categories;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'SubCategories' })
  subCategoryId: SubCategories;

  @Prop({ default: true })
  isActive: boolean;
}

export const ProductsSchema = SchemaFactory.createForClass(Products);
