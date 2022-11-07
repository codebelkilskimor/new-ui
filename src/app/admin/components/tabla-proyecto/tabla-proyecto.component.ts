import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import { Proyecto } from '../../interfaces/proyecto';

@Component({
  selector: 'app-tabla-proyecto',
  templateUrl: './tabla-proyecto.component.html',
  styleUrls: ['./tabla-proyecto.component.scss']
})
export class TablaProyectoComponent implements OnInit {
  @Input() resultados: Proyecto[] = []
  @Output() retornoPagina: EventEmitter<number> = new EventEmitter
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public responsive: boolean = false;
  public config: PaginationInstance = {
    id: 'paginacion',
    itemsPerPage: 10,
    currentPage: 1,
    totalItems: this.resultados.length,
  };
  public labels: any = {
    previousLabel: 'Anterior',
    nextLabel: 'Siguiente',
    screenReaderPaginationLabel: 'Pagina',
    screenReaderPageLabel: 'página',
    screenReaderCurrentLabel: `Estas en la página`,
  };
  constructor() { }

  ngOnInit(): void {
    this.config.totalItems = this.resultados.length
  }

  regresarPagina(e: number) {
    this.config.currentPage = e
  }

  excepcionPaginacion(e: any) {
    console.error(`Página ${e} no existe.`);
  }
}
