import axios from 'axios';

import { Address } from '@/models';

import { ViaCepAddress } from './types';

const viacepApi = axios.create({
  baseURL: 'https://viacep.com.br/ws',
});

export async function getAddressByZipcode(
  zipcode: string,
): Promise<Address | null> {
  try {
    const { data: result } = await viacepApi.get<ViaCepAddress>(
      `/${zipcode}/json`,
    );

    if (result?.erro) {
      return null;
    }

    return {
      city: result.localidade,
      neighborhood: result.bairro,
      state: result.uf,
      street: result.logradouro,
      zipCode: result.cep,
      number: '',
      complement: '',
    };
  } catch (error) {
    return null;
  }
}
