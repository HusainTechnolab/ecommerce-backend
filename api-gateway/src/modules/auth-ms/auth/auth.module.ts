import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MICRO_SERVICE } from 'src/utils/constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: MICRO_SERVICE.AUTH.NAME,
        transport: Transport.TCP,
        options: {
          port: MICRO_SERVICE.AUTH.TCP_PORT,
          host: MICRO_SERVICE.AUTH.TCP_HOST,
        },
      },
    ]),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
