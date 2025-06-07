import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';
import { UserRole } from 'generated/prisma';

export class createUserDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8, { message: 'Пароль должен быть больше 8 символов' })
  password: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5, { message: 'Имя должно быть больше 5 символов' })
  displayName: string;

  @IsEnum(UserRole, {
    message: 'role должен быть одним из: SUPERVISOR, MANAGER, ASSISTANT',
  })
  @IsNotEmpty()
  role: UserRole;
}
