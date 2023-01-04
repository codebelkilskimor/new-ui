import { Component, OnInit } from '@angular/core';
import { InvestigadoresService } from '../../services/investigadores.service';

@Component({
  selector: 'app-searcher-b',
  templateUrl: './searcher-b.component.html',
  styleUrls: ['./searcher-b.component.scss']
})
export class SearcherBComponent implements OnInit {

  onRequest: boolean = false;
  showTable: boolean = false
  filtros: any = {}
  reporte: string = '';
  constructor(private api: InvestigadoresService ) { }
  
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
  getFiltros(e: any) {
    this.filtros = e
  }

  getInvestigadores() {
   
  }

}
