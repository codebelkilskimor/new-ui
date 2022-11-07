import { Component, OnInit } from '@angular/core';
import { BuscadorProyectosService } from '../../services/buscador-proyectos.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent implements OnInit {
  onRequest: boolean = false;
  showTable: boolean = false
  reporte: string = '';
  filtros: any = {}
  constructor(
    private buscProServ: BuscadorProyectosService
  ) { }

  ngOnInit(): void {
  }
  sendRequest() {
    this.onRequest = true;
    this.showTable = false
    this.buscProServ.getProyectosBuscador(this.filtros).subscribe(resp => console.log(resp))
    setTimeout(() => {
      this.onRequest = false;
      this.showTable = true
    }, 1000);
  }

  getProyectos() {
    this.onRequest = true;
    this.showTable = false
  }

  getFiltros(e: any) {
    this.filtros = e
  }

}
