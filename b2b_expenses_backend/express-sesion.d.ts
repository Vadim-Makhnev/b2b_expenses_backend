import 'express-session';
import { User } from '../user/entities/user.entity';

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
