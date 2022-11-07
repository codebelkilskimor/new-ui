import { Component, Input, OnInit } from '@angular/core';
import { BuscadorProyectosService } from '../../services/buscador-proyectos.service';
import { Proyecto, ProyectoDetalle } from '../../interfaces/proyecto';

@Component({
  selector: 'app-resultados-busqueda',
  templateUrl: './resultados-busqueda.component.html',
  styleUrls: ['./resultados-busqueda.component.scss']
})
export class ResultadosBusquedaComponent implements OnInit {
  @Input() titulo: string = ''
  @Input() tituloResultados: string = ''
  @Input() filtros: any

  onRequest: boolean = false;
  showTable: boolean = false
  reporte: string = '';
  resultadosBusqueda: ProyectoDetalle[] = []
  constructor(
    private buscProServ: BuscadorProyectosService
  ) { }

  ngOnInit(): void {
  }
  sendRequest() {
    this.onRequest = true;
    this.showTable = false
    this.buscProServ.getProyectosBuscador(this.filtros).subscribe(resp => {
      this.resultadosBusqueda = resp.proyectos.data
      console.log(this.resultadosBusqueda)
      this.onRequest = false
      this.showTable = true
    })
  }

  getFiltros(e: any) {
    this.filtros = e
  }
}
