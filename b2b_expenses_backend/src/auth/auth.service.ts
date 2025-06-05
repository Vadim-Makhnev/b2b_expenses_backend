import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { Request, Response } from 'express';
import { User } from 'generated/prisma';
import { createUserDto } from './dto/create.dto';
import { loginUserDto } from './dto/login.dto';
import * as argon2 from 'argon2';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly configService: ConfigService,
  ) {}

  async register(req: Request, registerData: createUserDto) {
    const isExists = await this.userService.getUserByEmail(registerData.email);

    if (isExists) {
      throw new ConflictException('Пользователь уже существует');
    }

    const user = await this.userService.create(
      registerData.email,
      registerData.password,
      registerData.displayName,
      `https://api.dicebear.com/9.x/initials/svg?seed=${registerData.displayName}`,
      registerData.role,
    );

    return this.saveSession(req, user);
  }

  async login(req: Request, loginData: loginUserDto) {
    const user = await this.userService.getUserByEmail(loginData.email);

    if (!user) {
      throw new NotFoundException(
        'Пользователь не найден, проверьте введенные данные',
      );
    }

    const isValidPassword = await argon2.verify(
      user.password,
      loginData.password,
    );

    if (!isValidPassword) {
      throw new UnauthorizedException(
        'Неверный email или пароль, проверьте правильность введенных данныъ',
      );
    }

    return this.saveSession(req, user);
  }

  async logout(req: Request, res: Response): Promise<void> {
    return new Promise((resolve, reject) => {
      req.session.destroy((err) => {
        if (err) {
          return reject(
            new InternalServerErrorException('Не удвлось завершить сессию'),
          );
        }
        res.clearCookie(this.configService.getOrThrow<string>('SESSION_NAME'));
        resolve();
      });
    });
  }

  private async saveSession(req: Request, user: User) {
    return new Promise((resolve, reject) => {
      req.session.userId = user.id;

      req.session.save((err) => {
        if (err) {
          return reject(
            new InternalServerErrorException('Не удалось сохранить сессию'),
          );
        }
        resolve(user);
      });
    });
  }
}
