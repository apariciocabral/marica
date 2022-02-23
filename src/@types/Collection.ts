import { AddressType } from './Address';
import { CategoryType } from './Category';

export type CollectionType = {
  id: number;
  nome: string;
  capa?: string;
  lat?: number;
  lng?: number;
  enderecos: AddressType[];
  categorias: CategoryType[];
  label?: string;
};
