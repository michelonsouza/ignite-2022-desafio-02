import { useCallback } from 'react';

import { Trash, SmileyMeh } from 'phosphor-react';

import { QuantityInput } from '@/components';
import { useCartContext } from '@/hooks';
import { Product } from '@/models';
import { currencyFormatter } from '@/utils';

import {
  RootContainer,
  ProductContainer,
  ImageContainer,
  ProductRootContainer,
  ProductInfoContainer,
  InfoContainer,
  InfoTitle,
  ActionsContainer,
  RemoveButton,
  ItemAmountContainer,
  CartTotalInfoItem,
  CartTotalsInfoContainer,
  ConfirmFinishInvoiceButton,
  CartTotal,
  NoItems,
} from './styles';
import { CartResumeProps } from './types';

export function CartResume({
  onFinishInvoice: _,
  disableFinishinvoice,
}: CartResumeProps): JSX.Element {
  const {
    products,
    updateItemQuantityState,
    removeProductFromCartState,
    totalItemsAmount,
    deliveryPrice,
    totalAmount,
  } = useCartContext();

  const handleUpdateItemQuantity = useCallback(
    (product: Product) => (quantity: number) => {
      const newProductWithQuantity = { ...product, quantity };

      updateItemQuantityState(newProductWithQuantity);
    },
    [updateItemQuantityState],
  );

  const handleRemoveProduct = useCallback(
    (product: Product) => () => {
      removeProductFromCartState(product);
    },
    [removeProductFromCartState],
  );

  const getItemTotalAmount = useCallback((product: Product) => {
    const totalAmount = product.quantity * product.price;

    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(totalAmount);
  }, []);

  return (
    <RootContainer>
      {products.map(product => (
        <ProductRootContainer key={product.id}>
          <ProductContainer>
            <ImageContainer src={product.image} alt={product.title} />
            <ProductInfoContainer>
              <InfoContainer>
                <InfoTitle>{product.title}</InfoTitle>
                <ActionsContainer>
                  <QuantityInput
                    value={product.quantity}
                    onChangeQuantity={handleUpdateItemQuantity(product)}
                  />
                  <RemoveButton
                    type="button"
                    onClick={handleRemoveProduct(product)}
                  >
                    <Trash size={16} />
                    <span>REMOVER</span>
                  </RemoveButton>
                </ActionsContainer>
              </InfoContainer>
              <ItemAmountContainer>
                <p>{getItemTotalAmount(product)}</p>
              </ItemAmountContainer>
            </ProductInfoContainer>
          </ProductContainer>
        </ProductRootContainer>
      ))}
      {!!products.length && (
        <CartTotalsInfoContainer>
          <CartTotalInfoItem>
            <span>Total de itens</span>
            <span>{currencyFormatter(totalItemsAmount)}</span>
          </CartTotalInfoItem>
          <CartTotalInfoItem>
            <span>Entrega</span>
            <span>{currencyFormatter(deliveryPrice)}</span>
          </CartTotalInfoItem>
          <CartTotal>
            <span>Total</span>
            <span>{currencyFormatter(totalAmount)}</span>
          </CartTotal>
        </CartTotalsInfoContainer>
      )}
      {!products.length && (
        <NoItems>
          <span>
            Sem produtos <SmileyMeh size={28} />{' '}
          </span>
        </NoItems>
      )}
      <ConfirmFinishInvoiceButton
        type="submit"
        form="new-invoice-form"
        disabled={disableFinishinvoice || !products.length}
      >
        Confirmar Pedido
      </ConfirmFinishInvoiceButton>
    </RootContainer>
  );
}
