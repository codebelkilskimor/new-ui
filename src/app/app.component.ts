import { Component } from '@angular/core';
import { LoggedService } from './services/logged.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loggedIn = false;
  constructor(
    private logged: LoggedService
  ) {
    this.logged.authStatus$.subscribe( logStatus => this.loggedIn = logStatus)
  }
}
