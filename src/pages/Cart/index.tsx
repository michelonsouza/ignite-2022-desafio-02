import { MapPinLine, CurrencyDollar } from 'phosphor-react';
import { useTheme } from 'styled-components';

import { Describe, CartResume } from './components';
import {
  RootContainer,
  AddressContainer,
  SectionTitle,
  Card,
  ItemsCard,
  ProductsContainer,
} from './styles';

export function Cart(): JSX.Element {
  const theme = useTheme();

  return (
    <RootContainer>
      <AddressContainer>
        <SectionTitle>Complete seu pedido</SectionTitle>
        <Card>
          <Describe
            Icon={MapPinLine}
            iconColor={theme.yellow.dark}
            title="Endereço de Entrega"
            subtitle="Informe o endereço onde deseja receber seu pedido"
          />
        </Card>
        <Card>
          <Describe
            Icon={CurrencyDollar}
            iconColor={theme.purple.main}
            title="Pagamento"
            subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          />
        </Card>
      </AddressContainer>
      <ProductsContainer>
        <SectionTitle>Cafés selecionados</SectionTitle>
        <ItemsCard>
          <CartResume onFinishInvoice={console.info} />
        </ItemsCard>
      </ProductsContainer>
    </RootContainer>
  );
}

Cart.displayName = 'Cart';

export default Cart;
