import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { User } from 'generated/prisma';

export const Authorized = createParamDecorator(
  (data: keyof User, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest() as Request;
    const user = request.user;

    if (!user) {
      throw new Error('пользователь не найден в request');
    }

    return data ? user[data] : user;
  },
);
