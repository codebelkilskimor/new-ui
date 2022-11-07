import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Proyecto } from '../interfaces/proyecto';

export const API_URL = environment.apiUrl

@Injectable({
  providedIn: 'root'
})

export class BuscadorProyectosService {

  constructor(
    private http: HttpClient
  ) { }

  getProyectosBuscador(data: any) {
    return this.http.post<Proyecto>(`${API_URL}/proyectos`, data)
  }

  getProyectoPorId(id: number) {
    return this.http.get<Proyecto>(`${API_URL}/proyectos/${id}`)
  }
}
