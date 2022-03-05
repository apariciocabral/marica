/* eslint-disable camelcase */
import { AddressType } from './Address';
import { CategoryType } from './Category';
import { EquipmentType } from './Equipaments';
import { GeneralInfoType } from './GeneralInfo';
import { HourFunctionType } from './HourFunction';
import { ImageType } from './Image';
import { NetworkType } from './Network';
import { PhoneType } from './Phone';
import { SpaceType } from './Spaces';

export type EventSpacesType = {
  id: number;
  nome: string;
  capa: string;
  lat: number;
  lng: number;
  descricao_t: string;
  categorias: CategoryType[];
  addresses: AddressType[];
  enderecos: AddressType[];
  estruturas: GeneralInfoType[];
  restricoes: GeneralInfoType[];
  email: string;
  redes: NetworkType[];
  horario_funcionamento: HourFunctionType[];
  phones: PhoneType[];
  dicas_t: string;
  preco_t: string;
  viajantes: GeneralInfoType[];
  label: string;
  formas_pagamento: GeneralInfoType[];
  icone: string;
  images: ImageType[];
  is_delivery: boolean;
  site: string;
  espacos: SpaceType[];
  equipamentos: EquipmentType[];
};
