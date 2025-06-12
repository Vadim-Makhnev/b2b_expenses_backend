import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import IORedis from 'ioredis';

@Injectable()
export class RedisService {
  public client: IORedis;

  constructor(private readonly configService: ConfigService) {
    this.client = new IORedis(
      this.configService.getOrThrow<string>('REDIS_URI'),
    );
  }

  getClient(): IORedis {
    return this.client;
  }
}
