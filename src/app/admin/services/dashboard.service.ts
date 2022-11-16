import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ElementosDashboard } from '../interfaces/datosDashboard';

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
}
