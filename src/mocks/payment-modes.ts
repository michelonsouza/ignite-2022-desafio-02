import { ForwardRefExoticComponent, RefAttributes } from 'react';

import { IconProps, CreditCard, Bank, Money } from 'phosphor-react';

import { PaymentType } from '@/enums';

interface PaymentMode {
  type: PaymentType;
  text: string;
  Icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
}

export const paymentModesMock: PaymentMode[] = [
  {
    type: PaymentType.CREDIT,
    Icon: CreditCard,
    text: 'Cartão de Crédito',
  },
  {
    type: PaymentType.DEBIT,
    Icon: Bank,
    text: 'Cartão de Débito',
  },
  {
    type: PaymentType.MONEY,
    Icon: Money,
    text: 'Dinheiro',
  },
];
