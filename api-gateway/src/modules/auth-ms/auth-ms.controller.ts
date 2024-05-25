import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthMsService } from './auth-ms.service';
import { CreateAuthMDto } from './dto/create-auth-m.dto';
import { UpdateAuthMDto } from './dto/update-auth-m.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth-ms')
@ApiTags('Authentication')
export class AuthMsController {
  constructor(private readonly authMsService: AuthMsService) {}

  @Post()
  create(@Body() createAuthMDto: CreateAuthMDto) {
    return this.authMsService.create(createAuthMDto);
  }

  @Get()
  findAll() {
    return this.authMsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authMsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthMDto: UpdateAuthMDto) {
    return this.authMsService.update(+id, updateAuthMDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authMsService.remove(+id);
  }
}
