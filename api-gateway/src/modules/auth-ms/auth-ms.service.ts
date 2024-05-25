import { Injectable } from '@nestjs/common';
import { CreateAuthMDto } from './dto/create-auth-m.dto';
import { UpdateAuthMDto } from './dto/update-auth-m.dto';

@Injectable()
export class AuthMsService {
  create(createAuthMDto: CreateAuthMDto) {
    return 'This action adds a new authM';
  }

  findAll() {
    return `This action returns all authMs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} authM`;
  }

  update(id: number, updateAuthMDto: UpdateAuthMDto) {
    return `This action updates a #${id} authM`;
  }

  remove(id: number) {
    return `This action removes a #${id} authM`;
  }
}
