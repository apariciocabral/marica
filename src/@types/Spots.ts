/* eslint-disable camelcase */
import { AddressType } from './Address';
import { CategoryType } from './Category';
import { HourFunctionType } from './HourFunction';
import { NetworkType } from './Network';
import { PhoneType } from './Phone';
import { RestrictionsType } from './Restriction';
import { StructureType } from './Structure';

export type SpotsType = {
  id: number;
  nome: string;
  capa?: string;
  lat?: number;
  lng?: number;
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
};
