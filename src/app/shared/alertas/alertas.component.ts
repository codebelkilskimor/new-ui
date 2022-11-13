import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.scss']
})
export class AlertasComponent {
  tipo: string = ''
  texto: string = ''
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) {
    this.tipo = this.data.tipo
    this.texto = this.data.texto
  }
}
