/* eslint-disable @typescript-eslint/no-unused-vars */
import { TextInput, ZipCodeInput } from '@/components';

import { useBloc } from './bloc';
import {
  RootContainer,
  SingleInputContainer,
  RowContainer,
  StateContainer,
} from './styles';

export function NewInvoiceForm(): JSX.Element {
  const { register, formState, handleUpdateFormAddressByZipCode } = useBloc();

  return (
    <RootContainer>
      <SingleInputContainer>
        <ZipCodeInput
          required
          placeholder="CEP"
          {...register('zipCode')}
          error={!!formState.errors?.zipCode?.message}
          helperText={formState.errors?.zipCode?.message}
          onGetAddress={handleUpdateFormAddressByZipCode}
        />
      </SingleInputContainer>
      <TextInput
        required
        placeholder="Rua"
        {...register('street')}
        error={!!formState.errors?.street?.message}
        helperText={formState.errors?.street?.message}
      />
      <RowContainer>
        <SingleInputContainer>
          <TextInput
            required
            placeholder="Número"
            {...register('number')}
            error={!!formState.errors?.number?.message}
            helperText={formState.errors?.number?.message}
          />
        </SingleInputContainer>
        <TextInput placeholder="Complemento" {...register('complement')} />
      </RowContainer>
      <RowContainer>
        <SingleInputContainer>
          <TextInput
            required
            placeholder="Bairro"
            {...register('neighborhood')}
            error={!!formState.errors?.neighborhood?.message}
            helperText={formState.errors?.neighborhood?.message}
          />
        </SingleInputContainer>
        <TextInput
          required
          placeholder="Cidade"
          {...register('city')}
          error={!!formState.errors?.neighborhood?.message}
          helperText={formState.errors?.neighborhood?.message}
        />
        <StateContainer>
          <TextInput
            required
            placeholder="UF"
            maxLength={2}
            {...register('state')}
            error={!!formState.errors?.state?.message}
            helperText={formState.errors?.state?.message}
          />
        </StateContainer>
      </RowContainer>
    </RootContainer>
  );
}
