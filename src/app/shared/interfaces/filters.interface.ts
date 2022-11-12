export interface Filtros {
  titulo:    string;
  key:       string;
  contenido: Contenido[];
}

export interface Contenido {
  id:     number | string;
  nombre: string;
}
