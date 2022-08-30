import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-role-modal',
  templateUrl: './role-modal.component.html',
  styleUrls: ['./role-modal.component.scss']
})
export class RoleModalComponent implements OnInit {
  constructor( public dialogRef: MatDialogRef<RoleModalComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close({success: true})
  }

}
