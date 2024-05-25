import { Module } from '@nestjs/common';
import { AuthMsService } from './auth-ms.service';
import { AuthMsController } from './auth-ms.controller';

@Module({
  controllers: [AuthMsController],
  providers: [AuthMsService],
})
export class AuthMsModule {}
