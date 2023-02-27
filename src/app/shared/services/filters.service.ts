import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Filtros } from '../interfaces/filters.interface';
import { environment } from 'src/environments/environment';

export const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  constructor(private http: HttpClient) {}

  getFilters() {
    const rol = atob(localStorage.getItem('rol') || '');
    return this.http.get<Filtros[]>(`${API_URL}/filtros/${rol}`);
  }
}
