import { useContext } from 'react';

import { CartContext, CartContextData } from '@/contexts';

export function useCartContext(): CartContextData {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('You must have CartContext in upper scope.');
  }

  return context;
}
