export interface Filtros {
  nombre: string;
  key: string;
  elems: ElementosFiltros[];
}

export interface ElementosFiltros {
  key: string;
  name: string;
  value: string;
}