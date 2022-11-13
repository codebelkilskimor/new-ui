import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Reportes } from '../interfaces/reportes';
import { OpcionesReportes } from '../interfaces/opcionesReportes';
import { FacPrograma } from '../interfaces/facPrograma';

export const API_URL = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  constructor(
    private http: HttpClient
  ) { }

  getReportes() {
    return this.http.get<OpcionesReportes[]>('assets/json/reportes.json');
  }

  getFacultades() {
    return this.http.get<FacPrograma[]>(`${API_URL}/facultades`);
  }

  getProgramas() {
    return this.http.get<FacPrograma[]>(`${API_URL}/programas`);
  }

  getProyectosPresupuesto(data: any) {
    return this.http.post<Reportes>(`${API_URL}/reportes/presupuestos`, data);
  }

  getProyectosConvocatoria(data: any) {
    return this.http.post<Reportes>(`${API_URL}/reportes/convocatorias`, data);
  }

  getProyectosNecesitanIntegrantes(data: any) {
    return this.http.post<Reportes>(`${API_URL}/reportes/integrantes`, data);
  }

  getProyectosSemillero(data: any) {
    return this.http.post<Reportes>(`${API_URL}/reportes/semillero`, data);
  }

  getProyectosGrado(data: any) {
    return this.http.post<Reportes>(`${API_URL}/reportes/trabajo-de-grado`, data);
  }

  getProyectosAula(data: any) {
    return this.http.post<Reportes>(`${API_URL}/reportes/proyectos-aula`, data);
  }

  getProyectosInvestigadoresIndependientes(data: any) {
    return this.http.post<Reportes>(`${API_URL}/reportes/investigadores-independientes`, data);
  }

  getProyectosPorFacultad(id: number, data: any) {
    return this.http.post<Reportes>(`${API_URL}/reportes/facultad/${id}`, data);
  }

  getProyectosPorPrograma(id: number, data: any) {
    return this.http.post<Reportes>(`${API_URL}/reportes/programa/${id}`, data);
  }
}
