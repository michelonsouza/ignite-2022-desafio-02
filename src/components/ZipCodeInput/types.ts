import { HTMLProps } from 'react';

import { Address } from '@/models';

export type ZipCodeInputProps = HTMLProps<HTMLInputElement> & {
  error?: boolean;
  helperText?: string;
  onGetAddress(address: Address | null): void;
};
