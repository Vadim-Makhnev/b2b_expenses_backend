import * as dotenv from 'dotenv';

dotenv.config();

export const IS_DEV_ENV = process.env.NODE_ENV === 'devlopment';
