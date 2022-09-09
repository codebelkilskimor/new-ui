import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  reportes = [
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
