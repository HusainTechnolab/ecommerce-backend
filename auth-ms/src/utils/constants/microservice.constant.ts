import * as dotenv from 'dotenv';
dotenv.config({ path: `${process.cwd()}/config/${process.env.NODE_ENV}.env` });

export const AUTH_MS = {
  NAME: 'AUTH_MS',
};
