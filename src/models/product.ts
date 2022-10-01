import { Coffee } from './coffee';

export interface Product extends Coffee {
  quantity: number;
}
