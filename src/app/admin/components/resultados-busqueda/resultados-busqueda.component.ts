import { Component, Input, OnInit } from '@angular/core';
import { BuscadorProyectosService } from '../../services/buscador-proyectos.service';
import { Proyecto } from '../../interfaces/proyecto';
import { PaginationInstance } from 'ngx-pagination';
import { InvestigadoresService } from '../../services/investigadores.service';
import { Usuario } from '../../interfaces/investigadores';

@Component({
  selector: 'app-resultados-busqueda',
  templateUrl: './resultados-busqueda.component.html',
  styleUrls: ['./resultados-busqueda.component.scss'],
})
export class ResultadosBusquedaComponent implements OnInit {
  @Input() titulo: string = '';
  @Input() tituloResultados: string = '';
  @Input() busResultados: string = '';
  @Input() filtros: any;
  @Input() api: string = '';

  onRequest: boolean = false;
  showTable: boolean = false;
  reporte: string = '';
  resultadosBusquedaProjects: Proyecto[] = [];
  resultadosBusquedaUsers: Usuario[] = [];

  constructor(
    private buscProServ: BuscadorProyectosService,
    private buscInvServ: InvestigadoresService
  ) {}

  ngOnInit(): void {}
  sendRequest() {
    this.onRequest = true;
    this.showTable = false;
    if (this.api === 'inv') {
      this.sendRequestInv();
    } else {
      this.sendRequestPro();
    }
  }

  sendRequestPro(): void {
    this.buscProServ.getProyectosBuscador(this.filtros).subscribe((resp) => {
      this.resultadosBusquedaProjects = resp.proyectos;
      this.onRequest = false;
      this.showTable = true;
    });
  }

  sendRequestInv(): void {
    this.buscInvServ.getInvestigadores(this.filtros).subscribe((resp) => {
      this.resultadosBusquedaUsers = resp.usuarios;
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
