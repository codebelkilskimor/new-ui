import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input() colorFondo: string = ''
  @Input() tituloTarjeta: string = ''
  @Input() valorTarjeta: string = ''
  constructor() { }

  ngOnInit(): void {
  }

}
