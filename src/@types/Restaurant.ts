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

export type RestaurantType = {
  almoco: boolean;
  almoco_hospedes: boolean;
  cafe_hospedes: boolean;
  cafe_manha: boolean;
  categorias: CategoryType[];
  descricao_t: string;
  email: string;
  estruturas: StructureType[];
  formas_pagamento: PaymentType[];
  horario_funcionamento: HourFunctionType[];
  id: number;
  images: ImageType[];
  jantar: boolean;
  jantar_hospedes: boolean;
  leitos?: number;
  nome: string;
  phones: PhoneType[];
  quartos: number;
  restricoes: RestrictionsType[];
  site: string;
  addresses: AddressType[];
  redes: NetworkType[];
};
