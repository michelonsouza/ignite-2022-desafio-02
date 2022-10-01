import { ReactNode, ForwardRefExoticComponent, RefAttributes } from 'react';

import { IconProps } from 'phosphor-react';

export interface IconWithLabelProps {
  Icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
  label?: ReactNode;
  iconBackground: string;
}
