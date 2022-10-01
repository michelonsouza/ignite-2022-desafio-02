import { HTMLProps } from 'react';

export interface QuantityInputProps extends HTMLProps<HTMLInputElement> {
  onChangeQuantity(quantity: number): void;
}
