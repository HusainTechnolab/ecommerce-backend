import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CategoriesDocument = HydratedDocument<Categories>;

@Schema({ timestamps: true })
export class Categories {
  @Prop()
  name: string;

  @Prop({ required: false, default: null })
  description: string;

  @Prop({ required: false, default: null })
  image: string;

  @Prop({ default: true })
  isActive: boolean;
}

export const CategoriesSchema = SchemaFactory.createForClass(Categories);
