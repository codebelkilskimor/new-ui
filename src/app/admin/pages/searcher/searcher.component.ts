import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent implements OnInit {


  proyecto = [
    'Ejemplo 1',
    'Ejemplo 2',
    'Ejemplo 3',
    'Ejemplo 4',
    'Ejemplo 5'
  ];
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
