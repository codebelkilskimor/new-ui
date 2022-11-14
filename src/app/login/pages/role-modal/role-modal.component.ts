import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-role-modal',
  templateUrl: './role-modal.component.html',
  styleUrls: ['./role-modal.component.scss'],
})
export class RoleModalComponent implements OnInit {
  rolSeleccionado: string = '';
  constructor(
    public dialogRef: MatDialogRef<RoleModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  close() {
    this.dialogRef.close({
      success: false,
    });
  }

  setColor(id: number, rol: string) {
    this.rolSeleccionado = rol;
    document.getElementById(`rol-${id}`)?.classList.add('selected-role-item');
  }

  continuar() {
    this.dialogRef.close({
      success: true,
      role: this.rolSeleccionado,
    });
  }
}
