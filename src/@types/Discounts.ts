/* eslint-disable camelcase */
import { AddressType } from './Address';
import { CategoryType } from './Category';
import { ModulesType } from './Modules';

export type DiscountsType = {
  id: number;
  nome: string;
  capa?: string;
  lat?: number;
  lng?: number;
  categorias: CategoryType[];
  enderecos: AddressType[];
  modulos: ModulesType[];
  data?: [];
  links?: {
    first?: string;
    last?: string;
    prev?: null;
    next?: null;
  };
  meta?: {
    current_page: number;
    from: null;
    last_page: number;
    path: string;
    per_page: number;
    to?: null;
    total: number;
  };
};
