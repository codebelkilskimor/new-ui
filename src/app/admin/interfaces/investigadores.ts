export interface Respuestainvestigadores {
    success:  boolean;
    usuarios: Usuario[];
}

export interface Usuario {
    cedula:          string;
    nombres:         string;
    apellidos:       string;
    participaciones: proyecto[];
}

export interface proyecto {
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
    facultades:              any;
    programas:               any;
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