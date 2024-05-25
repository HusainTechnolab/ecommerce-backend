import { PartialType } from '@nestjs/swagger';
import { CreateAuthMDto } from './create-auth-m.dto';

export class UpdateAuthMDto extends PartialType(CreateAuthMDto) {}
