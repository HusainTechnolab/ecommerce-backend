import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { MICRO_SERVICE } from './utils/constants';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      host: process.env.TCP_HOST,
      port: Number(process.env.TCP_PORT),
    },
  });
  await app.startAllMicroservices();

  logger.log(
    `${MICRO_SERVICE.PRODUCT_MS.NAME} STARTED ON PORT ${process.env.TCP_PORT}`,
  );
}
bootstrap();
