import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent implements OnInit {


 
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
