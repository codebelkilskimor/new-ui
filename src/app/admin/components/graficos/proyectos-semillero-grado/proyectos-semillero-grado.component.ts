import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { DashboardService } from '../../../services/dashboard.service';

@Component({
  selector: 'app-proyectos-semillero-grado',
  templateUrl: './proyectos-semillero-grado.component.html',
  styleUrls: ['./proyectos-semillero-grado.component.scss'],
})
export class ProyectosSemilleroGradoComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @Input() filtros: any = {};
  hideChart: boolean = true;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {},
      y: {
        min: 1,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [DataLabelsPlugin];

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
      .getProyectosGradoSemillero(this.filtros)
      .subscribe((resp) => {
        if (!resp.success) {
          return;
        }
        const labelsData: string[] = [];
        const proyectosGradoCantidad: number[] = [];
        const semillerosCantidad: number[] = [];
        Object.keys(resp.datos).forEach((val, i) => {
          labelsData.push(resp.datos[i].facultad);
          proyectosGradoCantidad.push(resp.datos[i].proyectos_grado);
          semillerosCantidad.push(resp.datos[i].semilleros);
        });
        this.barChartData.labels = labelsData;

        this.barChartData.datasets.push({
          data: proyectosGradoCantidad,
          label: 'Proyectos de Grado',
          backgroundColor: '#6bb555',
        });

        this.barChartData.datasets.push({
          data: semillerosCantidad,
          label: 'Semillero',
          backgroundColor: '#30addb',
        });
        this.hideChart = false;
      });
  }
}
