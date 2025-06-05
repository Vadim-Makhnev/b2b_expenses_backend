import {
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon2 from 'argon2';
import { User, UserRole } from 'generated/prisma';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async getUserById(id: string) {
    const user = await this.prismaService.user.findUnique({ where: { id } });

    if (!user) {
      throw new ConflictException('Пользователя не существует');
    }

    return user;
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
