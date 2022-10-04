import {
  createContext,
  PropsWithChildren,
  useReducer,
  useMemo,
  useCallback,
} from 'react';

import { PaymentType } from '@/enums';
import { Product, Address } from '@/models';
import {
  cartReducer,
  updateProductItemQuantity,
  addProductToCart,
  removeProductFromCart,
  updateAddress,
  updatePaymentType,
  resetDefaultValues,
} from '@/reducers';

import { getCartInitialState } from './helpers';
import { CartContextData } from './types';

export * from './data';
export * from './types';

export const CartContext = createContext<CartContextData>(
  {} as CartContextData,
);

export function CartContextProvider({
  children,
}: PropsWithChildren): JSX.Element {
  const [state, dispatch] = useReducer(cartReducer, getCartInitialState());

  const memoTotalItemsQuantity = useMemo(() => {
    return state.products.length;
  }, [state.products]);

  const memoTotalItemsAmount = useMemo(() => {
    const total = state.products.reduce((accumulator: number, product) => {
      return accumulator + product.quantity * product.price;
    }, 0);

    return Number(total.toFixed(2));
  }, [state.products]);

  const memoTotalAmount = useMemo(() => {
    return Number((memoTotalItemsAmount + state.deliveryPrice).toFixed(2));
  }, [memoTotalItemsAmount, state.deliveryPrice]);

  const addNewProductToCartState = useCallback((product: Product) => {
    dispatch(addProductToCart(product));
  }, []);

  const removeProductFromCartState = useCallback((product: Product) => {
    dispatch(removeProductFromCart(product));
  }, []);

  const updateItemQuantityState = useCallback((product: Product) => {
    dispatch(updateProductItemQuantity(product));
  }, []);

  const updateAddressState = useCallback((address: Address) => {
    dispatch(updateAddress(address));
  }, []);

  const updatePaymentTypeState = useCallback((paymentType: PaymentType) => {
    dispatch(updatePaymentType(paymentType));
  }, []);

  const resetDefaultState = useCallback(() => {
    dispatch(resetDefaultValues());
  }, []);

  const memoValue: CartContextData = useMemo(() => {
    return {
      address: state.address,
      products: state.products,
      totalAmount: memoTotalAmount,
      deliveryPrice: state.deliveryPrice,
      totalItemsAmount: memoTotalItemsAmount,
      totalItemsQuantity: memoTotalItemsQuantity,
      resetDefaultState,
      updateAddressState,
      updatePaymentTypeState,
      updateItemQuantityState,
      addNewProductToCartState,
      removeProductFromCartState,
    };
  }, [
    state.address,
    state.products,
    memoTotalAmount,
    resetDefaultState,
    updateAddressState,
    state.deliveryPrice,
    memoTotalItemsAmount,
    memoTotalItemsQuantity,
    updatePaymentTypeState,
    updateItemQuantityState,
    addNewProductToCartState,
    removeProductFromCartState,
  ]);

  return (
    <CartContext.Provider value={memoValue}>{children}</CartContext.Provider>
  );
}
