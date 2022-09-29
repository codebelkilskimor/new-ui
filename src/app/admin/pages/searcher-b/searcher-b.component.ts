import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searcher-b',
  templateUrl: './searcher-b.component.html',
  styleUrls: ['./searcher-b.component.scss']
})
export class SearcherBComponent implements OnInit {

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
