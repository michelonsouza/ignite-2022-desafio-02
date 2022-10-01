import { Banner } from '@/components';
import { useCartContext } from '@/hooks';
import { coffeesMock } from '@/mocks';

import { ProductItem } from './components';
import {
  RootContainer,
  ProductListContainer,
  ProductListTitle,
  ProductList,
} from './styles';

export function Home(): JSX.Element {
  const { addNewProductToCartState } = useCartContext();

  return (
    <RootContainer>
      <Banner />
      <ProductListContainer>
        <ProductListTitle>Nossos Cafés</ProductListTitle>
        <ProductList>
          {coffeesMock.map(product => (
            <ProductItem
              product={product}
              key={product.id}
              onAddToCart={addNewProductToCartState}
            />
          ))}
        </ProductList>
      </ProductListContainer>
    </RootContainer>
  );
}

Home.dysplayName = 'Home';

export default Home;
