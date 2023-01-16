export interface ProyectosGraficoEstadoFacultad {
  success: boolean;
  datos: Dato[];
}

export interface Dato {
  facultad: string;
  finalizados: number;
  no_finalizados: number;
}
