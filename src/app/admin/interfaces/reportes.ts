import { DatosReporte } from './datosReporte';
export interface Reportes {
  success: boolean;
  mensaje: string;
  ruta:    string;
  data:    DatosReporte[]
}
