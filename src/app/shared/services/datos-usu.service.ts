import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';

export const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class DatosUsuService {
  constructor(private http: HttpClient) {}

  getDatosUsu() {
    return this.http.get<any>(`${API_URL}/auth/datos-usu`);
  }
}
