import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Filtros } from '../interfaces/filters.interface';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  constructor(
    private http: HttpClient
  ) { }

  getFilters() {
    return this.http.get<Filtros[]>('/assets/json/filters.json')
  }
}
