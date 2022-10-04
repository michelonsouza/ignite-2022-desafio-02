import * as zod from 'zod';

import { newAddressValidationSchema } from './validator';

export type NewInvoiceFormData = zod.infer<typeof newAddressValidationSchema>;
