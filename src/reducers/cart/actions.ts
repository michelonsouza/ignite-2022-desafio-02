import { CartContextState } from '@/contexts';
import { CartActionTypes, PaymentType } from '@/enums';
import { Product, Address } from '@/models';

import { CartAction } from './types';

const defaultState: CartContextState = {
  products: [],
  address: {
    city: '',
    neighborhood: '',
    state: '',
    street: '',
    zipCode: '',
    complement: '',
    number: '',
  },
  deliveryPrice: 3.5,
  paymentType: PaymentType.CREDIT,
};

export function addProductToCart(product: Product): CartAction<Product> {
  return {
    type: CartActionTypes.ADD_TO_CART,
    payload: product,
  };
}

export function removeProductFromCart(product: Product): CartAction<Product> {
  return {
    type: CartActionTypes.REMOVE_FROM_CART,
    payload: product,
  };
}

export function updateAddress(address: Address): CartAction<Address> {
  return {
    type: CartActionTypes.UPDATE_ADDRESS,
    payload: address,
  };
}

export function updateProductItemQuantity(
  product: Product,
): CartAction<Product> {
  return {
    type: CartActionTypes.UPDATE_ITEM_QUANTITY,
    payload: product,
  };
}

export function updatePaymentType(
  paymentType: PaymentType,
): CartAction<PaymentType> {
  return {
    type: CartActionTypes.UPDATE_PAYMENT_TYPE,
    payload: paymentType,
  };
}

export function resetDefaultValues(): CartAction<CartContextState> {
  return {
    type: CartActionTypes.RESET_DEFAULT_VALUES,
    payload: defaultState,
  };
}
