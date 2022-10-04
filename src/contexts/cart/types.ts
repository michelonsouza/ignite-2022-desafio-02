import { PaymentType } from '@/enums';
import { Product, Address } from '@/models';

export interface CartContextData {
  products: Product[];
  totalAmount: number;
  deliveryPrice: number;
  totalItemsAmount: number;
  totalItemsQuantity: number;
  address: Address;
  resetDefaultState(): void;
  updateAddressState(address: Address): void;
  updateItemQuantityState(product: Product): void;
  addNewProductToCartState(product: Product): void;
  removeProductFromCartState(product: Product): void;
  updatePaymentTypeState(paymentType: PaymentType): void;
}

export interface CartContextState {
  products: Product[];
  deliveryPrice: number;
  address: Address;
  paymentType: PaymentType;
}
