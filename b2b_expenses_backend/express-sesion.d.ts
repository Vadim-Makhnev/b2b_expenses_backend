import 'express-session';
import { User } from 'generated/prisma';
import 'express';

declare module 'express-session' {
  interface SessionData {
    userId?: string;
  }
}

declare module 'express' {
  interface Request {
    user?: User;
  }
}
