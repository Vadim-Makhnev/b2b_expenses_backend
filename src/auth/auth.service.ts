import { ConflictException, Injectable } from '@nestjs/common';
import { createUserDto } from './dto/create.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async register(registerData: createUserDto) {
    const isExists = await this.userService.getUserByEmail(registerData.email);

    if (isExists) {
      throw new ConflictException('Пользователь уже существует');
    }

    const user = await this.userService.create(registerData);

    return user;
  }
}
