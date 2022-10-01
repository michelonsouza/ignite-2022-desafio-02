import { CartActionTypes, PaymentType } from '@/enums';
import { Product, Address } from '@/models';

import { CartAction } from './types';

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
