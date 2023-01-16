import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { DashboardService } from '../../../services/dashboard.service';
import { ObjectFlags } from 'typescript';

@Component({
  selector: 'app-proyectos-proceso-terminados',
  templateUrl: './proyectos-proceso-terminados.component.html',
  styleUrls: ['./proyectos-proceso-terminados.component.scss'],
})
export class ProyectosProcesoTerminadosComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @Input() filtros: any = {};
  hideChart: boolean = true;
  barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {},
      y: {
        min: 0,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };
  barChartType: ChartType = 'bar';
  barChartPlugins = [DataLabelsPlugin];

  barChartData: ChartData = {
    labels: [],
    datasets: [],
  };
  constructor(private dashboardServ: DashboardService) {}

  ngOnInit(): void {
    this.getDatosGrafica();
  }

  getDatosGrafica() {
    this.dashboardServ
      .getProyectosEstadosPorFacultad(this.filtros)
      .subscribe((resp) => {
        if (!resp.success) {
          return;
        }
        const labelsData: string[] = [];
        const finalizadosArrData: number[] = [];
        const noFinalizadosArrData: number[] = [];
        Object.keys(resp.datos).forEach((val, i) => {
          labelsData.push(resp.datos[i].facultad);
          finalizadosArrData.push(resp.datos[i].finalizados);
          noFinalizadosArrData.push(resp.datos[i].no_finalizados);
        });
        this.barChartData.labels = labelsData;

        this.barChartData.datasets.push({
          data: finalizadosArrData,
          label: 'Finalizados',
        });

        this.barChartData.datasets.push({
          data: noFinalizadosArrData,
          label: 'No Finalizados',
        });
        this.hideChart = false;
      });
  }
}
