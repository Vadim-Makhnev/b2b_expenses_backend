import {
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon2 from 'argon2';
import { User, UserRole } from 'generated/prisma';
import { RedisService } from 'src/redis/redis.service';

@Injectable()
export class UserService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly redisService: RedisService,
  ) {}

  async getUserById(id: string) {
    const logger = new Logger('UserService');

    try {
      const cachedUser = await this.redisService.getClient().get(`user:${id}`);

      if (cachedUser) {
        return JSON.parse(cachedUser) as User;
      }
    } catch (error) {
      logger.warn(`Redis недоступен при получении ${id}`, error);
    }

    try {
      const user = await this.prismaService.user.findUnique({ where: { id } });

      if (!user) {
        throw new ConflictException('Пользователя не существует');
      }

      const { password, ...userWithoutPassword } = user;
      try {
        await this.redisService
          .getClient()
          .setex(`user:${id}`, 600, JSON.stringify(userWithoutPassword));
      } catch (err) {
        logger.warn(`Ошибка записи в Redis для пользователя ${id}`, err);
      }

      return userWithoutPassword;
    } catch (err) {
      logger.error(err);
      throw new InternalServerErrorException('Ошибка сервера');
    }
  }

  async getUserByEmail(email: string) {
    const user = await this.prismaService.user.findUnique({ where: { email } });

    return user;
  }

  async create(
    email: string,
    password: string,
    displayName: string,
    picture: string,
    role: UserRole,
  ): Promise<User> {
    try {
      const hashedPassword = await argon2.hash(password);
      const user = await this.prismaService.user.create({
        data: {
          email,
          password: hashedPassword,
          displayName,
          picture,
          role,
        },
      });
      return user;
    } catch {
      throw new HttpException(
        'Ошибка при создании пользователя',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
