import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MICRO_SERVICE } from 'src/utils/constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: MICRO_SERVICE.CATEGORIES.NAME,
        transport: Transport.TCP,
        options: {
          port: MICRO_SERVICE.CATEGORIES.TCP_PORT,
          host: MICRO_SERVICE.CATEGORIES.TCP_HOST,
        },
      },
    ]),
  ],
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}
