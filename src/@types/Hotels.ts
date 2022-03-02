/* eslint-disable camelcase */
import { AddressType } from './Address';
import { CategoryType } from './Category';
import { GeneralInfoType } from './GeneralInfo';
import { HourFunctionType } from './HourFunction';
import { ImageType } from './Image';
import { NetworkType } from './Network';
import { PhoneType } from './Phone';

export type HotelsType = {
  id: number;
  nome: string;
  email: string;
  capa: string;
  lat: number;
  lng: number;
  site: string;
  quartos: number;
  leitos: number;
  cafe_manha: boolean;
  cafe_hospedes: boolean;
  almoco: boolean;
  almoco_hospedes: boolean;
  jantar: boolean;
  jantar_hospedes: boolean;
  descricao_t: string;
  enderecos: AddressType[];
  images: ImageType[];
  horario_funcionamento: HourFunctionType[];
  phones: PhoneType[];
  categorias: CategoryType[];
  estruturas: GeneralInfoType[];
  formas_pagamento: GeneralInfoType[];
  redes: NetworkType[];
  restricoes: GeneralInfoType[];
  addresses: AddressType[];
  icone: string;
  label: string;
};
