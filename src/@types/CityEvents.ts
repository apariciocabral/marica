/* eslint-disable camelcase */
import { AddressType } from './Address';
import { CategoryType } from './Category';
import { GeneralInfoType } from './GeneralInfo';
import { HourFunctionType } from './HourFunction';
import { ImageType } from './Image';
import { NetworkType } from './Network';
import { PhoneType } from './Phone';

export type CityEventsType = {
  id: number;
  nome: string;
  capa?: string;
  lat?: number;
  lng?: number;
  categorias: CategoryType[];
  enderecos: AddressType[];
  addresses: AddressType[];
  datahora_fim_f?: string;
  datahora_inicio_f?: string;
  datahora_inicio: string;
  descricao_t?: string;
  preco_t?: string;
  email?: string;
  estruturas?: GeneralInfoType[];
  formas_pagamento?: GeneralInfoType[];
  gratuito?: boolean;
  images?: ImageType[];
  panoramas?: GeneralInfoType[];
  phones?: PhoneType[];
  redes?: NetworkType[];
  restricoes?: GeneralInfoType[];
  site?: string;
  url_ingresso?: string;
  horario_funcionamento?: HourFunctionType[];
};
