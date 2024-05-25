import { PartialType } from '@nestjs/swagger';
import { CreateUserMDto } from './create-user-m.dto';

export class UpdateUserMDto extends PartialType(CreateUserMDto) {}
