import { useCallback } from 'react';

import { PaymentType } from '@/enums';
import { useCartContext } from '@/hooks';
import { paymentModesMock } from '@/mocks';

import { PaymentModeContainer, RootContainer } from './styles';

export function PaymentMode(): JSX.Element {
  const { paymentType, updatePaymentTypeState } = useCartContext();

  const getIsActive = useCallback(
    (payment: PaymentType): Record<string, any> => {
      if (payment === paymentType) {
        return { 'data-active': 'true' };
      }

      return {};
    },
    [paymentType],
  );

  return (
    <RootContainer>
      {paymentModesMock.map(payment => (
        <PaymentModeContainer
          {...getIsActive(payment.type)}
          key={payment.type}
          onClick={() => updatePaymentTypeState(payment.type)}
        >
          <payment.Icon size={16} />
          {payment.text}
        </PaymentModeContainer>
      ))}
    </RootContainer>
  );
}
