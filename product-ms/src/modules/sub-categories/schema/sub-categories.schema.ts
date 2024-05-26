import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Categories } from 'src/modules/categories/schema/categories.schema';

export type SubCategoriesDocument = HydratedDocument<SubCategories>;

@Schema({ timestamps: true })
export class SubCategories {
  @Prop()
  name: string;

  @Prop({ required: false, default: null })
  description: string;

  @Prop({ required: false, default: null })
  image: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Categories' })
  categoryId: Categories;

  @Prop({ default: true })
  isActive: boolean;
}

export const SubCategoriesSchema = SchemaFactory.createForClass(SubCategories);
