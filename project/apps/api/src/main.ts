import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { AppRoutes, DEFAULT_HOST, SpaceName } from '@project/constant';
import { getFullServerPath } from '@project/helpers';
import { RequestIdInterceptor } from '@project/interceptors';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(AppRoutes.Api);
  app.useGlobalInterceptors(new RequestIdInterceptor());

  const config = new DocumentBuilder()
    .setTitle('The Api service')
    .setDescription('Api service API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(AppRoutes.Swagger, app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    })
  );

  const configService = app.get(ConfigService);
  const port = configService.get(`${SpaceName.AppApi}.port`);
  await app.listen(port);

  Logger.log(
    `🚀 Application is running on: ${getFullServerPath(DEFAULT_HOST, port)}/${
      AppRoutes.Api
    }`
  );
}

bootstrap();
