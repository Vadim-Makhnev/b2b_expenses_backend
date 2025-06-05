import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';
import { RedisStore } from 'connect-redis';
import * as session from 'express-session';
import IORedis from 'ioredis';
import { parse, StringValue } from './libs/common/utils/ms.utils';
import { parseBoolean } from './libs/common/utils/parse-boolean';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get(ConfigService);

  const redisClient = new IORedis(config.getOrThrow<string>('REDIS_URI'));

  const redisStore = new RedisStore({
    client: redisClient,
    prefix: config.getOrThrow<string>('SESSION_FOLDER'),
  });

  app.use(cookieParser(config.getOrThrow<string>('COOKIES_SECRET')));

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.use(
    session({
      store: redisStore,
      name: config.getOrThrow<string>('SESSION_NAME'),
      resave: true,
      saveUninitialized: false,
      secret: config.getOrThrow<string>('SESSION_SECRET'),
      cookie: {
        domain: config.getOrThrow<string>('SESSION_DOMAIN'),
        maxAge: parse(config.getOrThrow<StringValue>('SESSION_MAX_AGE')),
        httpOnly: parseBoolean(config.getOrThrow<string>('SESSION_HTTP_ONLY')),
        secure: parseBoolean(config.getOrThrow<string>('SESSION_SECURE')),
        sameSite: 'lax',
      },
    }),
  );

  app.enableCors({
    origin: config.getOrThrow<string>('ALLOWED_ORIGIN'),
    credentials: true,
    exposedHeaders: ['set-cookie'],
  });

  await app.listen(config.getOrThrow<number>('APPLICATION_PORT'));
}
bootstrap();
