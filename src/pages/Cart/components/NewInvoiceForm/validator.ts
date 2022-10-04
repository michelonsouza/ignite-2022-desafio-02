import * as zod from 'zod';

function validateZipCode(zipcode: string): boolean {
  const zipCodeRegex = /\d{5}-\d{3}/gi;
  const test = zipCodeRegex.test(zipcode);

  return test;
}

export const newAddressValidationSchema = zod.object({
  zipCode: zod
    .string()
    .trim()
    .refine(value => !!value, {
      message: 'O campo CEP é obrigatório',
    })
    .refine(
      value => {
        const test = validateZipCode(value);

        return test;
      },
      {
        message: 'Insira um CEP válido.',
      },
    ),
  street: zod
    .string()
    .trim()
    .refine(value => !!value, {
      message: 'O campo Rua é obrigatório',
    }),
  number: zod.string().refine(value => !!value, {
    message: 'O campo Número é obrigatório',
  }),
  neighborhood: zod
    .string()
    .trim()
    .refine(value => !!value, {
      message: 'O campo Bairro é obrigatório',
    }),
  city: zod
    .string()
    .trim()
    .refine(value => !!value, {
      message: 'O campo Cidade é obrigatório',
    }),
  state: zod
    .string()
    .trim()
    .min(2, 'O campo UF é obrigatório')
    .max(2, 'O campo UF deve conter 2 caracteres')
    .refine(value => !!value, {
      message: 'O campo UF é obrigatório',
    }),
});
