import { ReactNode, ForwardRefExoticComponent, RefAttributes } from 'react';

import { IconProps } from 'phosphor-react';

export interface DescribeProps {
  Icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
  title: ReactNode;
  subtitle: ReactNode;
  iconColor: string;
}
