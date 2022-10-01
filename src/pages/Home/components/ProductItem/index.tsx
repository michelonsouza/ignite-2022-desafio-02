import { useState, useMemo, useCallback } from 'react';

import { ShoppingCart } from 'phosphor-react';

import { Product } from '@/models';

import {
  CardContainer,
  ProductImage,
  TagsContainer,
  Tag,
  ProductTitle,
  ProductInfo,
  PriceContainer,
  ProductAmountInfoContainer,
  QuantityContainer,
  QuantityInputContainer,
  AddCartButton,
} from './styles';
import { ProductItemProps } from './types';

export function ProductItem({
  product,
  onAddToCart,
}: ProductItemProps): JSX.Element {
  const [quantity, setQuantity] = useState<number>(1);

  const formattedValue = useMemo(() => {
    const formatted = Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(product.price);

    const [currency, value] = formatted.replaceAll(/\s/gi, '_').split('_');

    return [currency.replaceAll(/\s/gi, '_'), value];
  }, [product.price]);

  const handleAddToCart = useCallback(() => {
    const formattedProduct: Product = { ...product, quantity };
    onAddToCart(formattedProduct);

    setQuantity(1);
  }, [onAddToCart, product, quantity]);

  return (
    <CardContainer>
      <ProductImage imgUrl={product.image} />
      {!!product.tags.length && (
        <TagsContainer>
          {product.tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagsContainer>
      )}
      <ProductTitle>{product.title}</ProductTitle>
      <ProductInfo>{product.info}</ProductInfo>
      <ProductAmountInfoContainer>
        <PriceContainer>
          {formattedValue.map(value => (
            <span key={value}>{value}</span>
          ))}
        </PriceContainer>
        <QuantityContainer>
          <QuantityInputContainer
            value={quantity}
            onChangeQuantity={setQuantity}
          />
          <AddCartButton type="button" onClick={handleAddToCart}>
            <ShoppingCart size={22} weight="fill" />
          </AddCartButton>
        </QuantityContainer>
      </ProductAmountInfoContainer>
    </CardContainer>
  );
}
