import { Coffee, Product } from '@/models';

export interface ProductItemProps {
  product: Coffee;
  onAddToCart(product: Product): void;
}
