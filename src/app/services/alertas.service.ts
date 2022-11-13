import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertasComponent } from '../shared/alertas/alertas.component';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {
  durationInSeconds = 4
  constructor(private _snackBar: MatSnackBar) { }

  abrirAlerta(texto: string, tipo: string) {
    this._snackBar.openFromComponent(AlertasComponent, {
      duration: this.durationInSeconds * 1000,
      data: {
        texto: texto,
        tipo: tipo
      }
    });
  }
}
