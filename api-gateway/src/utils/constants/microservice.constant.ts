import * as dotenv from 'dotenv';
dotenv.config({
  path: `${process.cwd()}/config/env/${process.env.NODE_ENV}.env`,
});

export const API_GATEWAY = {
  NAME: 'API_GATEWAY',
};

export const AUTH = {
  NAME: 'AUTH',
  TCP_PORT: Number(process.env.AUTH_TCP_PORT),
  TCP_HOST: process.env.AUTH_TCP_HOST,
  EVENT: {
    SIGN_IN: 'SIGN_IN',
    SIGN_UP: 'SIGN_UP',
  },
  EVENT_QUEUE: 'auth',
};
