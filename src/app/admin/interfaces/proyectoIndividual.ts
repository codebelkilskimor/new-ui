export interface ResultadoProyectoIndividual {
  success: boolean;
  proyectos: Proyectos;
}

export interface Proyectos {
  id: number;
  titulo: string;
  estado: string;
  descripcion: string;
  macro_proyecto: MacroProyecto;
  fecha_inicio: string;
  fecha_fin: string;
  semillero: Semillero;
  retroalimentacion_final: string;
  visibilidad: number;
  ciudad: string;
  metodologia: string;
  conclusiones: string;
  justificacion: string;
  tipo_conocimiento: string;
  tipo_proyecto: TipoProyecto;
  antecedentes: any[];
  area_conocimientos: AreaConocimiento[];
  participantes: Participante[];
  productos: Producto[];
  nombre_programa: string;
  nombre_facultad: string;
  presupuestos: Presupuestos[];
}

export interface AreaConocimiento {
  id: number;
  nombre: string;
  gran_area: string;
  descripcion: string;
  pivot: Pivot;
}

export interface Pivot {
  proyecto: number;
  area_conocimiento: number;
}

export interface MacroProyecto {
  id: number;
  nombre: string;
  descripcion: string;
  fecha_inicio: string;
  fecha_fin: string;
  estado: string;
}

export interface Participante {
  cedula: string;
  cod_universitario: number;
  correo_est: string;
  nombres: string;
  apellidos: string;
  telefono: string;
  correo_personal: string;
  semillero_id: null;
  programa_id: number;
}

export interface Producto {
  id: number;
  titulo_producto: string;
  tipo_producto: string;
  url_repo: string;
  fecha: string;
  proyecto: number;
}

export interface Semillero {
  id: number;
  nombre: string;
  descripcion: string;
  fecha_fun: string;
  grupo_investigacion: number;
  lider_semillero: string;
  linea_investigacion: string;
}

export interface TipoProyecto {
  nombre: string;
  descripcion: string;
}

export interface Presupuestos {
  id: number;
  monto: number;
  fecha: string;
  proyecto: number;
  descripcion: string;
}
