import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import { Proyecto } from '../../interfaces/proyecto';
import { MatDialog } from '@angular/material/dialog';
import { BuscadorProyectosService } from '../../services/buscador-proyectos.service';
import { DialogDetalleInvestigadorComponent } from '../../dialogs/dialog-detalle-investigador/dialog-detalle-investigador.component';

@Component({
  selector: 'app-tabla-search',
  templateUrl: './tabla-search.component.html',
  styleUrls: ['./tabla-search.component.scss']
})
export class TablaSearchComponent implements OnInit {
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
    constructor(
      private dialog: MatDialog,
      private buscadorServ: BuscadorProyectosService
    ) { }
  
    ngOnInit(): void {
      this.config.totalItems = this.resultados.length
    }
  
    regresarPagina(e: number) {
      this.config.currentPage = e
    }
  
    excepcionPaginacion(e: any) {
      console.error(`Página ${e} no existe.`);
    }
  
    buscarProyectoId(id: number) {
      return new Promise((resolve) => {
        this.buscadorServ.getProyectoPorId(id).subscribe(resp => {
          if (resp.success) resolve(resp.proyectos)
        })
      })
    }
  
    async abrirModal(id: number) {
      this.dialog.open(DialogDetalleInvestigadorComponent, {
        data: {
          proyecto: await this.buscarProyectoId(id)
        },
        maxWidth: '600px',
        width: '90%'
      });
    }
  }
  