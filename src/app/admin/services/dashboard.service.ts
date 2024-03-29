import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ElementosDashboard } from '../interfaces/datosDashboard';
import { ProyectosGraficoEstadoFacultad } from '../interfaces/proyectosGraficoEstadoFacultad';
import { ProyectosGradoSemillerosFacultad } from '../interfaces/proyectosGradoSemillerosFacultad';
import { ProyectosPresupuestoPorMes } from '../interfaces/proyectosPresupuestoPorMes';

export const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  getDatosDashboardTarjeta() {
    return this.http.get<ElementosDashboard>(
      `${API_URL}/graficos/elementos-dashboard`
    );
  }

  getProyectosGradoSemillero(data: any) {
    return this.http.get<ProyectosGradoSemillerosFacultad>(
      `${API_URL}/graficos/datos-graficas-grado-semillero-facultad`
    );
  }

  getProyectosEstadosPorFacultad(data: any) {
    return this.http.get<ProyectosGraficoEstadoFacultad>(
      `${API_URL}/graficos/datos-graficas-finalizados-facultad`
    );
  }

  getProyectosPresupuesto(data: any) {
    return this.http.get<ProyectosPresupuestoPorMes>(
      `${API_URL}/graficos/datos-graficas-presupuesto-proyectos-por-mes`
    );
  }
}
