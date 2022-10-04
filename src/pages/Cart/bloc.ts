import { useCallback } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { useCartContext } from '@/hooks';
import { Address } from '@/models';

import { newAddressValidationSchema } from './components/NewInvoiceForm/validator';

/**
 * @description Business Logic Component (BLOC) Cart
 */
export function useBloc() {
  const { address, updateAddressState } = useCartContext();
  const newInvoiceForm = useForm<Address>({
    defaultValues: address,
    resolver: zodResolver(newAddressValidationSchema),
    mode: 'onChange',
  });

  const { handleSubmit, formState } = newInvoiceForm;

  const submitForm = useCallback(
    (data: Address) => {
      updateAddressState(data);
    },
    [updateAddressState],
  );

  return {
    formState,
    submitForm,
    handleSubmit,
    newInvoiceForm,
  };
}
