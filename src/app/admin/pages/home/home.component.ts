import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  reports = [
    'tipo 1',
    'tipo 2',
    'tipo 3',
    'tipo 4',
    'tipo 5'
  ];
  onRequest: any = null;
  report = null;
  constructor() { }

  ngOnInit(): void {
  }

  sendRequest() {
    this.onRequest = true;
    setTimeout(() => {
      this.onRequest = false;
    }, 2000);
  }

}
