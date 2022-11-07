import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Proyectos } from '../../interfaces/proyectoIndividual';

@Component({
  selector: 'app-dialog-detalle-proyecto',
  templateUrl: './dialog-detalle-proyecto.component.html',
  styleUrls: ['./dialog-detalle-proyecto.component.scss']
})
export class DialogDetalleProyectoComponent implements OnInit {
  proyecto: Proyectos = {} as Proyectos
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.proyecto = this.data.proyecto
  }
}
