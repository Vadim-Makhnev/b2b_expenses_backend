import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  Matches,
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
  @Matches(/^[А-ЯЁ][а-яё]+\s[А-ЯЁ][а-яё]+\s[А-ЯЁ][а-яё]+$/, {
    message: 'ФИО должно быть в формате: Иванов Иван Иванович',
  })
  displayName: string;

  @IsEnum(UserRole, {
    message: 'role должен быть одним из: SUPERVISOR, MANAGER, ASSISTANT',
  })
  @IsNotEmpty()
  role: UserRole;
}
