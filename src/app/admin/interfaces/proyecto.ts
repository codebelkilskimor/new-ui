export interface Proyecto {
    success:   boolean;
    proyectos: Proyectos;
}

export interface Proyectos {
    current_page:   number;
    data:           ProyectoDetalle[];
    first_page_url: string;
    from:           number;
    last_page:      number;
    last_page_url:  string;
    links:          Link[];
    next_page_url:  null;
    path:           string;
    per_page:       number;
    prev_page_url:  null;
    to:             number;
    total:          number;
}

export interface ProyectoDetalle {
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
    nombre_facultad:         string;
    nombre_programa:         string;
    area_conocimientos:      AreaConocimiento[];
}

export interface AreaConocimiento {
    id:          number;
    nombre:      string;
    gran_area:   string;
    descripcion: string;
    pivot:       Pivot;
}

export interface Pivot {
    proyecto:          number;
    area_conocimiento: number;
}

export interface Link {
    url:    null | string;
    label:  string;
    active: boolean;
}
