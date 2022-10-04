/* eslint-disable no-param-reassign */
import { produce } from 'immer';

import { CartContextState } from '@/contexts';
import { CartActionTypes, StorageKeys, PaymentType } from '@/enums';
import { Product, Address } from '@/models';
import { encryptStorage } from '@/utils';

import { CartAction } from './types';

export function cartReducer(
  state: CartContextState,
  action: CartAction,
): CartContextState {
  switch (action.type) {
    case CartActionTypes.ADD_TO_CART:
      return produce(state, draft => {
        const product = action.payload as Product;
        const productExists = state.products.find(
          stateProduct => stateProduct.id === product.id,
        );
        let products = [...state.products];

        if (productExists) {
          products = products.map(stateProduct => {
            if (stateProduct.id !== productExists.id) {
              return stateProduct;
            }

            return {
              ...stateProduct,
              quantity: stateProduct.quantity + product.quantity,
            };
          });
        } else {
          products = [...products, product];
        }

        encryptStorage.setItem(StorageKeys.CART_PRODUCTS, products);
        draft.products = products;
      });

    case CartActionTypes.CLEAR_CART:
      return produce(state, draft => {
        encryptStorage.setItem(StorageKeys.CART_PRODUCTS, []);
        draft.products = [];
      });

    case CartActionTypes.REMOVE_FROM_CART:
      return produce(state, draft => {
        const product = action.payload as Product;
        const products = state.products.filter(
          stateProduct => stateProduct.id !== product.id,
        );

        encryptStorage.setItem(StorageKeys.CART_PRODUCTS, products);
        draft.products = products;
      });

    case CartActionTypes.UPDATE_ITEM_QUANTITY:
      return produce(state, draft => {
        const product = action.payload as Product;
        const products = state.products.map(stateProduct => {
          if (stateProduct.id !== product.id) {
            return stateProduct;
          }

          return {
            ...stateProduct,
            quantity: product.quantity,
          };
        });

        encryptStorage.setItem(StorageKeys.CART_PRODUCTS, products);
        draft.products = products;
      });

    case CartActionTypes.UPDATE_ADDRESS:
      return produce(state, draft => {
        const address = action.payload as Address;

        encryptStorage.setItem(StorageKeys.CART_ADDRESS, address);
        draft.address = address;
      });

    case CartActionTypes.UPDATE_PAYMENT_TYPE:
      return produce(state, draft => {
        const paymentType = action.payload as PaymentType;

        encryptStorage.setItem(StorageKeys.CART_PAYMENT_TYPE, paymentType);
        draft.paymentType = paymentType;
      });

    case CartActionTypes.RESET_DEFAULT_VALUES: {
      const defaultState = action.payload as CartContextState;
      return defaultState;
    }

    default:
      return state;
  }
}
