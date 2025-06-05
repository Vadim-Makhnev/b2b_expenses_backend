import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { Authorized } from 'src/auth/decorators/authorized.decorator';
import { Authorization } from 'src/auth/decorators/auth.decorator';
import { UserRole } from 'generated/prisma';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Authorization(UserRole.MANAGER)
  @HttpCode(HttpStatus.OK)
  @Get('profile')
  @HttpCode(HttpStatus.OK)
  async findProfile(@Authorized('id') userId: string) {
    return this.userService.getUserById(userId);
  }

  @Authorization(UserRole.MANAGER)
  @HttpCode(HttpStatus.OK)
  @Get('by-id/:id')
  async findById(@Param('id') id: string) {
    return this.userService.getUserById(id);
  }
}
