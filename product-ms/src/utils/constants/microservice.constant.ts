import * as dotenv from 'dotenv';
dotenv.config({ path: `${process.cwd()}/config/${process.env.NODE_ENV}.env` });

export const PRODUCT_MS = {
  NAME: 'PRODUCT_MS',
  EVENT: {
    SIGN_IN: 'SIGN_IN',
    SIGN_UP: 'SIGN_UP',
  },
};
