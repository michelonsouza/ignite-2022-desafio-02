export interface ViaCepAddress {
  /** neighborhood */
  bairro: string;
  /** zipCode */
  cep: string;
  /** city */
  localidade: string;
  /** street */
  logradouro: string;
  /** state */
  uf: string;
  erro?: any;
}
