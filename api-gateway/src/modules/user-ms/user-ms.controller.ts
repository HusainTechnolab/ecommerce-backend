import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserMsService } from './user-ms.service';
import { CreateUserMDto } from './dto/create-user-m.dto';
import { UpdateUserMDto } from './dto/update-user-m.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('user-ms')
@ApiTags('Users')
export class UserMsController {
  constructor(private readonly userMsService: UserMsService) {}

  @Post()
  create(@Body() createUserMDto: CreateUserMDto) {
    return this.userMsService.create(createUserMDto);
  }

  @Get()
  findAll() {
    return this.userMsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userMsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserMDto: UpdateUserMDto) {
    return this.userMsService.update(+id, updateUserMDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userMsService.remove(+id);
  }
}
