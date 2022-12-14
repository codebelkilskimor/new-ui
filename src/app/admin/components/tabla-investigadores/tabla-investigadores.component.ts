import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PaginationInstance } from 'ngx-pagination';
import { StringMappingType } from 'typescript';
import { DialogDetalleProyectoComponent } from '../../dialogs/dialog-detalle-proyecto/dialog-detalle-proyecto.component';
import { Usuario } from '../../interfaces/investigadores';
import { Proyectos } from '../../interfaces/proyectoIndividual';
import { InvestigadoresService } from '../../services/investigadores.service';

@Component({
  selector: 'app-tabla-investigadores',
  templateUrl: './tabla-investigadores.component.html',
  styleUrls: ['./tabla-investigadores.component.scss']
})
export class TablaInvestigadoresComponent implements OnInit {
  @Input() resultados: Usuario[] = []
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
    private buscadorServ: InvestigadoresService
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

  buscarProyectoId(id: string) {
    return new Promise((resolve) => {
      this.buscadorServ.getInvestigadores(id).subscribe(resp => {
        if (resp.success) resolve(resp.usuarios)
      })
    })
  }

  async abrirModal(id: string) {
    this.dialog.open(DialogDetalleProyectoComponent, {
      data: {
        proyecto: await this.buscarProyectoId(id)
      },
      maxWidth: '600px',
      width: '90%'
    });
  }
}
