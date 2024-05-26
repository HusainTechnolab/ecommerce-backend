import * as dotenv from 'dotenv';
dotenv.config({ path: `${process.cwd()}/config/${process.env.NODE_ENV}.env` });

export const PRODUCT_MS = {
  NAME: 'PRODUCT_MS',
};

export const CATEGORIES = {
  NAME: 'CATEGORIES',
  EVENTS: {
    CREATE: 'CATEGORY_CREATE',
    UPDATE: 'CATEGORY_UPDATE',
    DELETE: 'CATEGORY_DELETE',
    FIND_ALL: 'CATEGORY_FIND_ALL',
    FIND_ONE: 'CATEGORY_FIND_ONE',
  },
};

export const SUB_CATEGORIES = {
  NAME: 'SUB_CATEGORIES',
  EVENTS: {
    CREATE: 'SUB_CATEGORY_CREATE',
    UPDATE: 'SUB_CATEGORY_UPDATE',
    DELETE: 'SUB_CATEGORY_DELETE',
    FIND_ALL: 'SUB_CATEGORY_FIND_ALL',
    FIND_ONE: 'SUB_CATEGORY_FIND_ONE',
  },
};

export const PRODUCTS = {
  NAME: 'PRODUCTS',
  EVENTS: {
    CREATE: 'PRODUCT_CREATE',
    UPDATE: 'PRODUCT_UPDATE',
    DELETE: 'PRODUCT_DELETE',
    FIND_ALL: 'PRODUCT_FIND_ALL',
    FIND_ONE: 'PRODUCT_FIND_ONE',
  },
};
