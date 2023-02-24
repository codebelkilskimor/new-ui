import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.scss'],
})
export class NavegacionComponent implements OnInit {
  @Input() verDashboard: boolean = true;
  constructor() {}

  ngOnInit(): void {}
}
