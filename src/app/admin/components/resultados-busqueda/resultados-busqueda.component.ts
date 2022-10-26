import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultados-busqueda',
  templateUrl: './resultados-busqueda.component.html',
  styleUrls: ['./resultados-busqueda.component.scss']
})
export class ResultadosBusquedaComponent implements OnInit {
  @Input() titulo: string =''

  onRequest: boolean = false;
  showTable: boolean = false
  reporte: string = '';
  constructor() { }

  ngOnInit(): void {
  }
  sendRequest() {
    this.onRequest = true;
    this.showTable = false
    setTimeout(() => {
      this.onRequest = false;
      this.showTable = true
    }, 1000);
  }
}
