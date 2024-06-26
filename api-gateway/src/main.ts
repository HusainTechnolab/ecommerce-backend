import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { MICRO_SERVICE } from './utils/constants';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as dotenv from 'dotenv';
dotenv.config({
  path: `${process.cwd()}/config/env/${process.env.NODE_ENV}.env`,
});

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      stopAtFirstError: false,
      whitelist: true,
    }),
  );

  app.setGlobalPrefix('v1');
  const config = new DocumentBuilder()
    .setTitle('API')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description:
          'Input your JSON Web Token (JWT) for authentication purposes.',
        in: 'header',
      },
      'JWT-auth',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      defaultModelsExpandDepth: -1,
      filter: true,
    },
  });

  await app.listen(Number(process.env.PORT));
  logger.log(
    `${MICRO_SERVICE.API_GATEWAY.NAME} STARTED ON PORT ${process.env.PORT}`,
  );
}
bootstrap();
