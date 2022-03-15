import { AddressType } from './Address';
import { CategoryType } from './Category';

export type DeliveriesType = {
  id: number;
  nome: string;
  capa?: string;
  lat?: number;
  lng?: number;
  categorias: CategoryType[];
  enderecos: AddressType[];
};
