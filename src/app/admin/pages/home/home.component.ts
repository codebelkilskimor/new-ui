import { Component, OnInit } from '@angular/core';
import { ReportesService } from '../../services/reportes.service';
import { OpcionesReportes } from '../../interfaces/opcionesReportes';
import { Reportes } from '../../interfaces/reportes';
import { FacPrograma } from '../../interfaces/facPrograma';
import { environment } from 'src/environments/environment';
import { DatosReporte } from '../../interfaces/datosReporte';
import { AlertasService } from '../../../services/alertas.service';

export const FILES_URL = environment.filesUrl;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  onRequest: boolean = false;
  showTable: boolean = false;
  reporte: string = '';
  showFacultades: boolean = false;
  showProgramas: boolean = false;
  facultadConsulta: number = 0;
  programaConsulta: number = 0;
  optsReportes: OpcionesReportes[] = [];
  programas: FacPrograma[] = [];
  facultades: FacPrograma[] = [];
  dataReportes: DatosReporte[] = [];
  filtros: any = {};

  constructor(
    private reporServ: ReportesService,
    private alServ: AlertasService
  ) {}

  ngOnInit(): void {
    this.reporServ
      .getReportes()
      .subscribe((resp) => (this.optsReportes = resp));
    this.reporServ.getProgramas().subscribe((resp) => (this.programas = resp));
    this.reporServ
      .getFacultades()
      .subscribe((resp) => (this.facultades = resp));
  }

  getFiltros(e: any) {
    this.filtros = e;
  }

  selectReporte(event: any) {
    let val = event.value;
    val = val.toString();
    this.showFacultades = false;
    this.showProgramas = false;
    switch (val) {
      case '8':
        this.showFacultades = true;
        break;
      case '9':
        this.showProgramas = true;
        break;
      default:
        this.showFacultades = false;
        this.showProgramas = false;
        break;
    }
  }

  sendRequest() {
    this.onRequest = true;
    this.showTable = false;
    this.showFacultades = false;
    this.showProgramas = false;
    this.filtros.rol = atob(localStorage.getItem('rol') || '');
    switch (this.reporte.toString()) {
      case '1':
        this.reporServ
          .getProyectosPresupuesto(this.filtros)
          .subscribe((resp) => this.manejarRespuestaServicios(resp));
        break;
      case '2':
        this.reporServ
          .getProyectosConvocatoria(this.filtros)
          .subscribe((resp) => this.manejarRespuestaServicios(resp));
        break;
      case '3':
        this.reporServ
          .getProyectosNecesitanIntegrantes(this.filtros)
          .subscribe((resp) => this.manejarRespuestaServicios(resp));
        break;
      case '4':
        this.reporServ
          .getProyectosSemillero(this.filtros)
          .subscribe((resp) => this.manejarRespuestaServicios(resp));
        break;
      case '5':
        this.reporServ
          .getProyectosGrado(this.filtros)
          .subscribe((resp) => this.manejarRespuestaServicios(resp));
        break;
      case '6':
        this.reporServ
          .getProyectosAula(this.filtros)
          .subscribe((resp) => this.manejarRespuestaServicios(resp));
        break;
      case '7':
        this.reporServ
          .getProyectosInvestigadoresIndependientes(this.filtros)
          .subscribe((resp) => this.manejarRespuestaServicios(resp));
        break;
      case '8':
        this.showFacultades = true;
        this.reporServ
          .getProyectosPorFacultad(this.facultadConsulta, this.filtros)
          .subscribe((resp) => this.manejarRespuestaServicios(resp));
        break;
      case '9':
        this.showProgramas = true;
        this.reporServ
          .getProyectosPorPrograma(this.programaConsulta, this.filtros)
          .subscribe((resp) => this.manejarRespuestaServicios(resp));
        break;
    }
  }

  manejarRespuestaServicios(data: Reportes) {
    if (data.success) {
      if (data.data.length > 0) {
        this.dataReportes = data.data;
        this.alServ.abrirAlerta(data.mensaje, 'success');
        this.showTable = true;
        setTimeout(
          () => window.open(`${FILES_URL}/${data.ruta}`, '_blank'),
          1000
        );
      } else {
        this.alServ.abrirAlerta(
          'Error, no hay resultados para este reporte',
          'warning'
        );
      }
    } else {
      this.alServ.abrirAlerta(data.mensaje, 'warning');
    }
    this.onRequest = false;
  }
}
