import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartType, ChartEvent } from 'chart.js';
import { DashboardService } from '../../../services/dashboard.service';

@Component({
  selector: 'app-presupuesto-proyectos-por-mes',
  templateUrl: './presupuesto-proyectos-por-mes.component.html',
  styleUrls: ['./presupuesto-proyectos-por-mes.component.scss'],
})
export class PresupuestoProyectosPorMesComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
  @Input() filtros: any = {};
  hideChart: boolean = true;
  public lineChartData: ChartConfiguration['data'] = {
    datasets: [],
    labels: [],
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5,
      },
    },
    scales: {
      x: {},
      'y-axis-0': {
        position: 'left',
      },
      'y-axis-1': {
        position: 'right',
        grid: {
          color: 'rgba(255,0,0,0.3)',
        },
        ticks: {
          color: 'red',
        },
      },
    },

    plugins: {
      legend: { display: true },
      annotation: {
        annotations: [
          {
            type: 'line',
            scaleID: 'x',
            borderColor: 'orange',
            borderWidth: 2,
            label: {
              position: 'center',
              color: 'orange',
              font: {
                weight: 'bold',
              },
            },
          },
        ],
      },
    },
  };

  public lineChartType: ChartType = 'line';

  constructor(private dashboardServ: DashboardService) {}

  ngOnInit(): void {
    this.getDatosGrafica();
  }

  getDatosGrafica() {
    this.dashboardServ
      .getProyectosPresupuesto(this.filtros)
      .subscribe((resp) => {
        if (!resp.success) {
          return;
        }
        const labelsData: string[] = [];
        const presupuesto: number[] = [];
        Object.keys(resp.datos).forEach((val, i) => {
          labelsData.push(resp.datos[i].fecha);
          presupuesto.push(resp.datos[i].presupuesto);
        });
        this.lineChartData.labels = labelsData;

        this.lineChartData.datasets.push({
          data: presupuesto,
          label: 'Presupuesto Proyecto',
        });
        this.hideChart = false;
      });
  }
}
