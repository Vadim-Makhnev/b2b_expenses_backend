import { IsEmail, IsEnum, IsString, MinLength } from 'class-validator';
import { UserRole } from '../constants/user-role.enum';

export class createUserDto {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  @MinLength(5)
  displayName: string;

  @IsString()
  picture?: string;

  @IsEnum(UserRole, {
    message: 'role должен быть одним из: SUPERVISOR, MANAGER, ASSISTANT',
  })
  role: UserRole;
}
