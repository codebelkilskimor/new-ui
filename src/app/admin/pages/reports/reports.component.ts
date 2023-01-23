import { Component, OnInit } from '@angular/core';
import { default as Annotation } from 'chartjs-plugin-annotation';
import { DashboardService } from '../../services/dashboard.service';
import { ElementosDashboard } from '../../interfaces/datosDashboard';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
})
export class ReportsComponent implements OnInit {
  elemsDash: ElementosDashboard = {} as ElementosDashboard;
  dataLoad: boolean = false;
  tipoGrafica: number = 0;
  filtros: any = {};

  constructor(private dashServ: DashboardService) {}

  ngOnInit() {
    this.dashServ.getDatosDashboardTarjeta().subscribe((resp) => {
      this.elemsDash = resp;
      this.dataLoad = true;
    });
  }

  getFiltros(e: any) {
    this.filtros = e;
  }
}
