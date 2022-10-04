import { useMemo } from 'react';

import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react';
import { useTheme } from 'styled-components';

import { IconWithLabel } from '@/components';

import {
  HeroContainer,
  InfoContainer,
  InfoTitle,
  HeroImageContainer,
  InfoTopContainer,
  InfoSubtitle,
  HeroBackground,
  SubInfosContainer,
} from './styles';

export function Banner(): JSX.Element {
  const theme = useTheme();

  const memoSubInfos = useMemo(() => {
    return [
      {
        id: 'simple-safe-buy',
        color: theme.yellow.dark,
        label: 'Compra simples e segura',
        Icon: ShoppingCart,
      },
      {
        id: 'safe-packing',
        color: theme.typography.text,
        label: 'Embalagem mantém o café intacto',
        Icon: Package,
      },
      {
        id: 'fast-delivery',
        color: theme.yellow.main,
        label: 'Entrega rápida e rastreada',
        Icon: Timer,
      },
      {
        id: 'fresh-product',
        color: theme.purple.main,
        label: 'O café chega fresquinho até você',
        Icon: Coffee,
      },
    ];
  }, [theme]);

  return (
    <HeroContainer>
      <HeroBackground data-background />
      <InfoContainer>
        <InfoTopContainer>
          <InfoTitle>
            Encontre o café perfeito para qualquer hora do dia
          </InfoTitle>
          <InfoSubtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </InfoSubtitle>
        </InfoTopContainer>
        <SubInfosContainer>
          {memoSubInfos.map(info => (
            <IconWithLabel
              key={info.id}
              Icon={info.Icon}
              iconBackground={info.color}
              label={info.label}
            />
          ))}
        </SubInfosContainer>
      </InfoContainer>
      <HeroImageContainer data-hero />
    </HeroContainer>
  );
}
