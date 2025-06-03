import { IsEmail, IsString, MinLength } from 'class-validator';
import { UserRole } from '../constants/user-role.enum';

export class User {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @MinLength(5)
  @IsString()
  displayName: string;

  @IsString()
  picture?: string;

  role: UserRole;
}
