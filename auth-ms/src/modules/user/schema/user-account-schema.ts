import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude } from 'class-transformer';
import { HydratedDocument } from 'mongoose';

export type UserAccountDocument = HydratedDocument<UserAccount>;

@Schema({ timestamps: true })
export class UserAccount {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop({ unique: true })
  email: string;

  @Prop()
  @Exclude()
  password: string;

  @Prop()
  profile: string;

  @Prop({ required: false, default: null })
  @Exclude()
  resetPasswordToken: string;

  @Prop({ required: false, default: null })
  @Exclude()
  resetPasswordTokenExpireTime: Date;

  @Prop({ type: 'Boolean', default: true })
  @Exclude()
  isActive: boolean;
}

export const UserAccountSchema = SchemaFactory.createForClass(UserAccount);
