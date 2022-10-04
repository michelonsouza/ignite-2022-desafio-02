import { Container, IconContainer, LabelContainer } from './styles';
import { IconWithLabelProps } from './types';

export function IconWithLabel({
  Icon,
  label,
  iconBackground,
}: IconWithLabelProps): JSX.Element {
  return (
    <Container>
      <IconContainer style={{ backgroundColor: iconBackground }}>
        <Icon size={16} weight="fill" />
      </IconContainer>
      {label && <LabelContainer>{label}</LabelContainer>}
    </Container>
  );
}
