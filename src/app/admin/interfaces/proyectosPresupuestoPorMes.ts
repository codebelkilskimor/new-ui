export interface ProyectosPresupuestoPorMes {
  success: boolean;
  datos: Dato[];
}

export interface Dato {
  presupuesto: number;
  fecha: string;
}
