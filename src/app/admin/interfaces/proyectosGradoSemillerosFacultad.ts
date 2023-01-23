export interface ProyectosGradoSemillerosFacultad {
  success: boolean;
  datos: Dato[];
}

export interface Dato {
  facultad: string;
  proyectos_grado: number;
  semilleros: number;
}
