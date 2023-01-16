import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ElementosDashboard } from '../interfaces/datosDashboard';
import { ProyectosGraficoEstadoFacultad } from '../interfaces/proyectosGraficoEstadoFacultad';

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

  getProyectosEstadosPorFacultad(data: any) {
    return this.http.post<ProyectosGraficoEstadoFacultad>(
      `${API_URL}/graficos/datos-graficas-finalizados-facultad`,
      data
    );
  }

  getProyectosPresupuesto(data: any) {
    return this.http.post<ProyectosGraficoEstadoFacultad>(
      `${API_URL}/graficos/elementos-dashboard`,
      data
    );
  }
}
