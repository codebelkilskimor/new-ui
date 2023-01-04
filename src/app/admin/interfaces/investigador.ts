export interface Respuestauninvestigador {
    success: boolean;
    usuario: Usuario[];
}

export interface Usuario {
    cedula:            string;
    cod_universitario: number;
    correo_est:        string;
    nombres:           string;
    apellidos:         string;
    telefono:          string;
    correo_personal:   string;
    semillero_id:      null;
    programa_id:       number;
    participaciones:   Proyecto[];
}

export interface Proyecto {
    id:                      number;
    titulo:                  string;
    estado:                  string;
    descripcion:             string;
    macro_proyecto:          number;
    fecha_inicio:            string;
    fecha_fin:               string;
    semillero:               number;
    retroalimentacion_final: string;
    visibilidad:             number;
    ciudad:                  string;
    metodologia:             string;
    conclusiones:            string;
    justificacion:           string;
    tipo_proyecto:           string;
    clases:                  Clase[];
}

export interface Clase {
    numero:   number;
    nombre:   string;
    semestre: string;
    materia:  string;
    profesor: string;
    materium: Materium;
}

export interface Materium {
    catalogo: string;
    nombre:   string;
    programa: Programa;
}

export interface Programa {
    id:          number;
    nombre:      string;
    facultad_id: number;
    director:    null;
    facultad:    Facultad;
}

export interface Facultad {
    id:       number;
    nombre:   string;
    decano:   null;
    coor_inv: null;
}