import { useCallback } from 'react';

import { useFormContext } from 'react-hook-form';

import { defaultValues } from '@/contexts';
import { Address } from '@/models';

/**
 * @description Business Logic Component (BLOC) NewInvoice
 */
export function useBloc() {
  const { register, formState, getValues, reset } = useFormContext<Address>();

  const handleUpdateFormAddressByZipCode = useCallback(
    (address: Address) => {
      reset({
        ...getValues(),
        ...address,
      });
    },
    [getValues, reset],
  );

  return {
    register,
    formState,
    defaultValues,
    handleUpdateFormAddressByZipCode,
  };
}
