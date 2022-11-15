import { Component, Input, OnInit } from '@angular/core';
import { BuscadorProyectosService } from '../../services/buscador-proyectos.service';
import { Proyecto } from '../../interfaces/proyecto';
import { PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'app-resultados-busqueda',
  templateUrl: './resultados-busqueda.component.html',
  styleUrls: ['./resultados-busqueda.component.scss'],
})
export class ResultadosBusquedaComponent implements OnInit {
  @Input() titulo: string = '';
  @Input() tituloResultados: string = '';
  @Input() filtros: any;

  onRequest: boolean = false;
  showTable: boolean = false;
  reporte: string = '';
  resultadosBusqueda: Proyecto[] = [];

  constructor(private buscProServ: BuscadorProyectosService) {}

  ngOnInit(): void {}
  sendRequest() {
    this.onRequest = true;
    this.showTable = false;
    this.buscProServ.getProyectosBuscador(this.filtros).subscribe((resp) => {
      this.resultadosBusqueda = resp.proyectos;
      this.onRequest = false;
      this.showTable = true;
    });
  }

  getFiltros(e: any) {
    console.log(e);
    this.filtros = e;
  }

  paginaFiltros(e: any) {
    this.filtros.page = e;
  }
}
