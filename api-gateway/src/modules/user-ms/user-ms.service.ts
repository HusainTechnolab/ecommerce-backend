import { Injectable } from '@nestjs/common';
import { CreateUserMDto } from './dto/create-user-m.dto';
import { UpdateUserMDto } from './dto/update-user-m.dto';

@Injectable()
export class UserMsService {
  create(createUserMDto: CreateUserMDto) {
    return 'This action adds a new userM';
  }

  findAll() {
    return `This action returns all userMs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userM`;
  }

  update(id: number, updateUserMDto: UpdateUserMDto) {
    return `This action updates a #${id} userM`;
  }

  remove(id: number) {
    return `This action removes a #${id} userM`;
  }
}
