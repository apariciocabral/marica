/* eslint-disable camelcase */
export type ModulesType = {
  id: number;
  class_name: string;
  nome: string;
  route: string;
  icone: string;
  cupons: number;
  status: number;
  modulos_app: number;
  pivot: {
    app_id: number;
    modulo_id: number;
    mostrar_no_app: number;
    ordem: number;
  };
};
