import { Component, Input, OnInit } from '@angular/core';
import { DatosReporte } from '../../interfaces/datosReporte';

@Component({
  selector: 'app-tabla-reportes',
  templateUrl: './tabla-reportes.component.html',
  styleUrls: ['./tabla-reportes.component.scss']
})
export class TablaReportesComponent implements OnInit {
  @Input() datosReportes: DatosReporte[] = []
  columnas: string[] = ['nombre', 'descripcion', 'nombre_facultad', 'nombre_programa'];
  constructor() { }

  ngOnInit(): void {
  }

}
