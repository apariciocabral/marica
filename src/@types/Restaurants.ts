/* eslint-disable camelcase */
import { AddressType } from './Address';
import { CategoryType } from './Category';
import { GeneralInfoType } from './GeneralInfo';
import { HourFunctionType } from './HourFunction';
import { ImageType } from './Image';
import { NetworkType } from './Network';
import { PhoneType } from './Phone';

export type RestaurantsType = {
  id: number;
  nome: string;
  capa?: string;
  lat?: number;
  lng?: number;
  categorias: CategoryType[];
  enderecos: AddressType[];
  almoco: boolean;
  almoco_hospedes: boolean;
  cafe_hospedes: boolean;
  cafe_manha: boolean;
  descricao_t: string;
  email: string;
  estruturas: GeneralInfoType[];
  formas_pagamento: GeneralInfoType[];
  horario_funcionamento: HourFunctionType[];
  images: ImageType[];
  jantar: boolean;
  jantar_hospedes: boolean;
  leitos?: number;
  phones: PhoneType[];
  quartos: number;
  restricoes: GeneralInfoType[];
  site: string;
  addresses: AddressType[];
  redes: NetworkType[];
  icone: string;
  label: string;
  cozinhas: GeneralInfoType[];
  faixa_preco: number;
  refeicoes: GeneralInfoType[];
  is_delivery: boolean;
};
