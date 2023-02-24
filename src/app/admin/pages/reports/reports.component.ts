import { Component, OnInit } from '@angular/core';
import { default as Annotation } from 'chartjs-plugin-annotation';
import { DashboardService } from '../../services/dashboard.service';
import { ElementosDashboard } from '../../interfaces/datosDashboard';
import { RolesService } from '../../../services/roles.service';

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
  elementosDashboardRol: any;

  constructor(
    private dashServ: DashboardService,
    private rolServ: RolesService
  ) {}

  ngOnInit() {
    this.elementosDashboardRol = this.rolServ.getElementosDashboardVer(
      atob(localStorage.getItem('rol') || '')
    );
    this.dashServ.getDatosDashboardTarjeta().subscribe((resp) => {
      this.elemsDash = resp;
      this.dataLoad = true;
    });
  }

  getFiltros(e: any) {
    this.filtros = e;
  }

  getGraficaVisible(id: number) {
    const usuarioVeGrafica = this.elementosDashboardRol.graficas.find(
      (x: any) => x === id
    );
    return usuarioVeGrafica;
  }

  getTarjetaVisible(id: number) {
    const usuarioVeGrafica = this.elementosDashboardRol.tarjetas.find(
      (x: any) => x === id
    );
    return usuarioVeGrafica;
  }
}
