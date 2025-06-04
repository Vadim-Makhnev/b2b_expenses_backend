import {
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { createUserDto } from 'src/auth/dto/create.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon2 from 'argon2';

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

  async create(registerData: createUserDto) {
    try {
      const hashedPassword = await argon2.hash(registerData.password);
      const user = await this.prismaService.user.create({
        data: {
          email: registerData.email,
          password: hashedPassword,
          displayName: registerData.displayName,
          picture: registerData.picture,
          role: registerData.role,
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
