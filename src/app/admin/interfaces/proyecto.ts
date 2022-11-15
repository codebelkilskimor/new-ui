export interface Respuesta {
  success: boolean;
  proyectos: Proyecto[];
}

export interface Proyecto {
  id: number;
  titulo: string;
  estado: string;
  descripcion: string;
  macro_proyecto: number;
  fecha_inicio: string;
  fecha_fin: string;
  semillero: null;
  retroalimentacion_final: string;
  visibilidad: number;
  ciudad: string;
  metodologia: string;
  conclusiones: string;
  justificacion: string;
  tipo_proyecto: string;
  participantes: Participante[];
  area_conocimientos: AreaConocimiento[];
  clases: Clase[];
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

export interface Clase {
  numero: number;
  nombre: string;
  semestre: string;
  materia: string;
  profesor: string;
  materium: Materium;
}

export interface Materium {
  catalogo: string;
  nombre: string;
  programa: Programa;
}

export interface Programa {
  id: number;
  nombre: string;
  facultad_id: number;
  director: null;
  facultad: Facultad;
}

export interface Facultad {
  id: number;
  nombre: string;
  decano: number;
  coor_inv: number;
}

export interface Participante {
  cedula: string;
  cod_universitario: number;
  correo_est: string;
  nombres: string;
  apellidos: string;
  telefono: string;
  correo_personal: string;
  semillero_id: number;
  programa_id: number;
}
