/* eslint-disable camelcase */
import { AddressType } from './Address';
import { CategoryType } from './Category';
import { HourFunctionType } from './HourFunction';
import { ImageType } from './Image';
import { NetworkType } from './Network';
import { PaymentType } from './Payment';
import { PhoneType } from './Phone';
import { RestrictionsType } from './Restriction';
import { StructureType } from './Structure';
import { TravellerType } from './Traveller';

export type SpotsType = {
  id: number;
  nome: string;
  capa: string;
  lat: number;
  lng: number;
  descricao_t: string;
  categorias: CategoryType[];
  addresses: AddressType[];
  enderecos: AddressType[];
  estruturas: StructureType[];
  restricoes: RestrictionsType[];
  email: string;
  redes: NetworkType[];
  horario_funcionamento: HourFunctionType[];
  phones: PhoneType[];
  dicas_t: string;
  preco_t: string;
  viajantes: TravellerType[];
  label: string;
  formas_pagamento: PaymentType[];
  icone: string;
  images: ImageType[];
};
