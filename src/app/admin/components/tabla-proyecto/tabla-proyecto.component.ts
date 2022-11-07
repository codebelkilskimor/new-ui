import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-proyecto',
  templateUrl: './tabla-proyecto.component.html',
  styleUrls: ['./tabla-proyecto.component.scss']
})
export class TablaProyectoComponent implements OnInit {
  @Input() resultados: any
  constructor() { }

  ngOnInit(): void {
  }

}
