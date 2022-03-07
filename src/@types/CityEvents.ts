/* eslint-disable camelcase */
import { AddressType } from './Address';
import { CategoryType } from './Category';
import { GeneralInfoType } from './GeneralInfo';
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
  datahora_fim_f: string;
  datahora_inicio_f: string;
  descricao_t: string;
  email: string;
  estruturas: GeneralInfoType[];
  formas_pagamento: GeneralInfoType[];
  gratuito: number;
  panoramas: GeneralInfoType[];
  phones: PhoneType[];
  redes: NetworkType[];
  restricoes: GeneralInfoType[];
  site: string;
  url_ingresso: string;
};
