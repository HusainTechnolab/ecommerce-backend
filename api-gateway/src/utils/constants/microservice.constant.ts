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

export const CATEGORIES = {
  NAME: 'CATEGORIES',
  TCP_PORT: Number(process.env.CATEGORIES_TCP_PORT),
  TCP_HOST: process.env.CATEGORIES_TCP_HOST,
  EVENTS: {
    CREATE: 'CATEGORY_CREATE',
    UPDATE: 'CATEGORY_UPDATE',
    DELETE: 'CATEGORY_DELETE',
    FIND_ALL: 'CATEGORY_FIND_ALL',
    FIND_ONE: 'CATEGORY_FIND_ONE',
  },
  EVENT_QUEUE: 'categories',
};
