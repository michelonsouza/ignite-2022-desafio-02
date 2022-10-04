import { useMemo } from 'react';

import { MapPin, Timer, CurrencyDollar } from 'phosphor-react';
import { useTheme } from 'styled-components';

import deliveryBackground from '@/assets/images/delivery.svg';
import { IconWithLabel } from '@/components';
import { PaymentType } from '@/enums';
import { useCartContext } from '@/hooks';

import {
  RootContainer,
  InfoContainer,
  PageContainer,
  Title,
  Subtitle,
  InvoiceContainer,
  InvoiceDescriptionContainer,
  IllustrationContainer,
} from './styles';

const paymentTypeReadable = {
  [PaymentType.CREDIT]: 'Cartão de Crédito',
  [PaymentType.DEBIT]: 'Cartão de Débito',
  [PaymentType.MONEY]: 'Dinheiro',
};

export function Invoice(): JSX.Element {
  const theme = useTheme();
  const { address, paymentType } = useCartContext();

  const memoInfos = useMemo(() => {
    return [
      {
        id: 'delivery',
        color: theme.purple.main,
        label: (
          <>
            Entrega em{' '}
            <b>
              {address.street}, {address?.number || 'N/A'}
            </b>
            <br />
            {address.neighborhood} - {address.city}, {address.state}
          </>
        ),
        Icon: MapPin,
      },
      {
        id: 'delivery-time',
        color: theme.yellow.main,
        label: (
          <>
            Previsão de entrega
            <br />
            <b>20 min - 30 min</b>
          </>
        ),
        Icon: Timer,
      },
      {
        id: 'payment-type',
        color: theme.yellow.dark,
        label: (
          <>
            Pagamento na entrega
            <br />
            <b>{paymentTypeReadable[paymentType]}</b>
          </>
        ),
        Icon: CurrencyDollar,
      },
    ];
  }, [
    address.city,
    address.neighborhood,
    address?.number,
    address.state,
    address.street,
    paymentType,
    theme.purple.main,
    theme.yellow.dark,
    theme.yellow.main,
  ]);

  return (
    <RootContainer>
      <PageContainer>
        <InfoContainer>
          <Title>Uhu! Pedido confirmado</Title>
          <Subtitle>
            Agora é só aguardar que logo o café chegará até você
          </Subtitle>
        </InfoContainer>
        <InvoiceContainer>
          <InvoiceDescriptionContainer>
            {memoInfos.map(info => (
              <IconWithLabel
                Icon={info.Icon}
                key={info.id}
                iconBackground={info.color}
                label={info.label}
              />
            ))}
          </InvoiceDescriptionContainer>
          <IllustrationContainer
            src={deliveryBackground}
            alt="homem em uma motocipleta"
          />
        </InvoiceContainer>
      </PageContainer>
    </RootContainer>
  );
}

Invoice.displayName = 'Invoice';

export default Invoice;
