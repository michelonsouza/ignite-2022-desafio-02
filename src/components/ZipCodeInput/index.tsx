/* eslint-disable @typescript-eslint/no-unused-vars */
import { forwardRef, FormEvent, useCallback, useEffect, useState } from 'react';

import { getAddressByZipcode } from '@/services';

import {
  RootContainer,
  OptionalLabel,
  Container,
  HelperText,
  MaskedStyledInput,
} from './styles';
import { ZipCodeInputProps } from './types';

export const ZipCodeInput = forwardRef<HTMLInputElement, ZipCodeInputProps>(
  (
    { error, helperText, required, onChange, name, onGetAddress, ...props },
    ref,
  ): JSX.Element => {
    const [internValue, setInternValue] = useState<string>('');

    const getAddress = useCallback(async () => {
      const result = await getAddressByZipcode(internValue.replace('-', ''));

      if (result) {
        onGetAddress(result);
      }
    }, [internValue, onGetAddress]);

    useEffect(() => {
      if (internValue.length === 9) {
        getAddress();
      }
    }, [getAddress, internValue.length]);

    return (
      <RootContainer>
        <Container>
          <MaskedStyledInput
            {...(props as any)}
            ref={ref as any}
            mask="00000-000"
            name={name}
            onAccept={(value: any) => {
              if (onChange) {
                setInternValue(value);
                onChange({
                  target: { name, value },
                } as unknown as FormEvent<HTMLInputElement>);
              }
            }}
          />
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
