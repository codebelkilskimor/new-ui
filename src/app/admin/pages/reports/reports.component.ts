import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

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

  constructor(private dashServ: DashboardService) {}

  ngOnInit() {
    this.dashServ.getDatosDashboardTarjeta().subscribe((resp) => {
      this.elemsDash = resp;
      this.dataLoad = true;
    });
  }
}
