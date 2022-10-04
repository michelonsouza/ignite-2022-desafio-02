import { forwardRef } from 'react';

import { RootContainer, OptionalLabel, Container, HelperText } from './styles';
import { ZipCodeInputProps } from './types';

export const TextInput = forwardRef<HTMLInputElement, ZipCodeInputProps>(
  ({ error, helperText, required, ...props }, ref): JSX.Element => {
    return (
      <RootContainer>
        <Container>
          <input {...props} ref={ref} />
          {!required && <OptionalLabel>Opcional</OptionalLabel>}
        </Container>
        {!!helperText && (
          <HelperText className={error ? 'error' : undefined}>
            {helperText}
          </HelperText>
        )}
      </RootContainer>
    );
  },
);
