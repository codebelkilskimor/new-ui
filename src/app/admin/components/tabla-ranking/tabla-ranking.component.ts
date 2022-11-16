import { Component, Input, OnInit } from '@angular/core';
import { Ranking } from '../../interfaces/datosDashboard';

@Component({
  selector: 'app-tabla-ranking',
  templateUrl: './tabla-ranking.component.html',
  styleUrls: ['./tabla-ranking.component.scss'],
})
export class TablaRankingComponent implements OnInit {
  @Input() datosRanking: Ranking[] = [];
  constructor() {}
  returnZero() {
    return 0;
  }
  ngOnInit(): void {}
}
