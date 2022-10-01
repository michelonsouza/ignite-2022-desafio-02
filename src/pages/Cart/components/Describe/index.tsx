import {
  DescribeContainer,
  DescribeSubtitle,
  DescribeTitle,
  InfoContainer,
} from './styles';
import { DescribeProps } from './types';

export function Describe({
  Icon,
  iconColor,
  subtitle,
  title,
}: DescribeProps): JSX.Element {
  return (
    <DescribeContainer>
      <Icon size={22} style={{ color: iconColor }} />
      <InfoContainer>
        <DescribeTitle>{title}</DescribeTitle>
        <DescribeSubtitle>{subtitle}</DescribeSubtitle>
      </InfoContainer>
    </DescribeContainer>
  );
}
