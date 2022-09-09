import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Filtros } from '../interfaces/filters.interface';
import { FiltersService } from '../services/filters.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  toggleFilters: boolean = false
  arrFiltros: Filtros[] = []
  arrFilter: string[] = []
  constructor(
    private filterServ: FiltersService
  ) { }

  ngOnInit(): void {
    this.filterServ.getFilters().subscribe(filtros => this.arrFiltros = filtros)
  }

  toggleFilter() {
    this.toggleFilters = !this.toggleFilters
  }
}
