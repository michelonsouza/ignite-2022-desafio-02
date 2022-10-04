import { HTMLProps } from 'react';

export type TextInputProps = HTMLProps<HTMLInputElement> & {
  error?: boolean;
  helperText?: string;
};
