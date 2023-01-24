export interface ElementosDashboard {
  creados: number;
  finalizados: number;
  aula: number;
  grado: number;
  semillero: number;
  convocatorias: number;
  inv_independientes: number;
  presupuesto: number;
  tacitos: number;
  implicitos: number;
  ranking: Ranking[];
}

export interface Ranking {
  humanidades: number;
  ingenieria: number;
  psicologia: number;
  juridicas: number;
  economicas: number;
}
