import { CartActionTypes } from '@/enums';

export type CartAction<T = any> = {
  type: CartActionTypes;
  payload: T;
};
