import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RolesService {
  /** Reportes:
   * 1. Proyectos con presupuesto
   * 2. Proyectos por convocatoria
   * 3. Proyectos que necesitan integrantes
   * 4. Proyetos de semillero
   * 5. Proyectos que son trabajo de grado
   * 6. Proyectos que son proyecto de aula
   * 7. proyectos que son de investigadores independientes
   * 8. Proyectos por facultad
   * 9. Proyectos por programa
   */

  /** Graficas:
   * 1. Grafica proyectos no terminados/terminados
   * 2. Grafica presupuesto proyectos por mes
   * 3. Grafica Proyectos de grado y semillero
   */

  /** Tarjetas:
   * 1. Proyectos año creados / terminados
   * 2. Proyectos aula
   * 3. Proyectos grado
   * 4. Proyectos semillero
   * 5. Proyectos convocatoria
   * 6. Proyectos investigadores independientes
   * 7. Presupuesto a proyectos
   * 8. Conocimiento tacito / implicito
   */
  roles: any = [
    {
      nombre: 'Administrador',
      reportes: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      tarjetas: [1, 2, 3, 4, 5, 6, 7, 8],
      graficas: [1, 2, 3],
      dashboard: true,
      ranking: true,
    },
    {
      nombre: 'Biblioteca',
      reportes: [3, 2, 4, 5, 6, 7, 8, 9],
      tarjetas: [1, 2, 3, 4],
      graficas: [1, 2],
      dashboard: true,
      ranking: true,
    },
    {
      nombre: 'Coordinador Investigacion Facultad',
      reportes: [8, 9, 6, 3, 1, 5],
      tarjetas: [1, 2, 3, 4],
      graficas: [1, 2],
      dashboard: true,
      ranking: true,
    },
    {
      nombre: 'Director de programa',
      reportes: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      tarjetas: [1, 2, 3, 4, 5, 6, 7, 8],
      graficas: [1, 2, 3],
      dashboard: true,
      ranking: true,
    },
    {
      nombre: 'Docente',
      reportes: [3, 8, 9, 6],
      tarjetas: [1, 2, 3, 4],
      graficas: [1, 2],
      dashboard: true,
      ranking: true,
    },
    {
      nombre: 'Docente investigador',
      reportes: [5, 3],
      tarjetas: [],
      graficas: [],
      dashboard: false,
      ranking: false,
    },
    {
      nombre: 'Docente lider semillero',
      reportes: [4, 3, 1],
      tarjetas: [1, 2, 3, 4],
      graficas: [1, 2, 3],
      dashboard: true,
      ranking: true,
    },
    {
      nombre: 'Lider de grupo de investigacion',
      reportes: [8, 9],
      tarjetas: [1, 2, 3, 4],
      graficas: [1, 2, 3],
      dashboard: true,
      ranking: true,
    },
    {
      nombre: 'Profesional de investigacion',
      reportes: [8, 9],
      tarjetas: [],
      graficas: [],
      dashboard: false,
      ranking: true,
    },
  ];
  constructor() {}

  getReportesAVer(nombreRol: string) {
    const elementosVisiblesParaRol = this.roles.find(
      (x: any) => x.nombre === nombreRol
    );
    return {
      reportes: elementosVisiblesParaRol.reportes,
      dashboard: elementosVisiblesParaRol.dashboard,
    };
  }

  getElementosDashboardVer(nombreRol: string) {
    const elementosVisiblesParaRol = this.roles.find(
      (x: any) => x.nombre === nombreRol
    );
    return {
      dashboard: elementosVisiblesParaRol.dashboard,
      tarjetas: elementosVisiblesParaRol.tarjetas,
      graficas: elementosVisiblesParaRol.graficas,
      ranking: elementosVisiblesParaRol.ranking,
    };
  }
}
