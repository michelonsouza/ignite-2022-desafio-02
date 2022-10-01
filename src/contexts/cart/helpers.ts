import { StorageKeys, PaymentType } from '@/enums';
import { Product, Address } from '@/models';
import { encryptStorage } from '@/utils';

import { CartContextState } from './types';

export function getCartInitialState(): CartContextState {
  const paymentType =
    encryptStorage.getItem<PaymentType>(StorageKeys.CART_PAYMENT_TYPE) ||
    PaymentType.CREDIT;

  const deliveryPrice =
    encryptStorage.getItem<number>(StorageKeys.CART_DELIVERY_PRICE) || 3.5;

  const products =
    encryptStorage.getItem<Product[]>(StorageKeys.CART_PRODUCTS) || [];

  const address = encryptStorage.getItem<Address>(StorageKeys.CART_ADDRESS) || {
    city: '',
    neighborhood: '',
    state: '',
    street: '',
    zipCode: '',
    complement: '',
    number: '',
  };

  return {
    address,
    products,
    paymentType,
    deliveryPrice,
  };
}
