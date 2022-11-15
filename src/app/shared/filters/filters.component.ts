import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Filtros } from '../interfaces/filters.interface';
import { FiltersService } from '../services/filters.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  toggleFilters: boolean = false;
  arrFiltros: any[] = [];
  arrEstados: any[] = [];
  arrFacultad: any[] = [];
  arrPrograma: any[] = [];
  arrArea: any[] = [];
  objFiltros: any = {
    estado: null,
    facultad: null,
    programa: null,
    areaConocimiento: null,
  };
  @Output() filtros: EventEmitter<any> = new EventEmitter();

  constructor(private filterServ: FiltersService) {}

  ngOnInit(): void {
    this.filterServ
      .getFilters()
      .subscribe((filtros) => (this.arrFiltros = filtros));
  }

  toggleFilter() {
    this.toggleFilters = !this.toggleFilters;
  }

  setValorFiltro(key: string, value: any) {
    switch (key) {
      case 'estado':
        this.buscarElemArreglo(this.arrEstados, value, key);
        break;
      case 'facultad':
        this.buscarElemArreglo(this.arrFacultad, value, key);
        break;
      case 'programa':
        this.buscarElemArreglo(this.arrPrograma, value, key);
        break;
      case 'areaConocimiento':
        this.buscarElemArreglo(this.arrArea, value, key);
        break;
    }
  }

  buscarElemArreglo(arreglo: any[], valorFiltro: any, filtroKey: string) {
    const indiceBuscar = arreglo.findIndex((elem) => elem === valorFiltro);
    indiceBuscar > -1
      ? arreglo.splice(indiceBuscar, 1)
      : arreglo.push(valorFiltro);
    this.objFiltros[filtroKey] = arreglo;
    this.retornarFiltros();
  }

  retornarFiltros() {
    this.filtros.emit(this.objFiltros);
  }
}
