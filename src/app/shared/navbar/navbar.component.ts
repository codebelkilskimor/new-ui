import { Component } from '@angular/core';
import { LoggedService } from '../../services/logged.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  loggedIn = false;
  constructor(private logged: LoggedService, private router: Router) {
    this.logged.authStatus$.subscribe(
      (logStatus) => (this.loggedIn = logStatus)
    );
  }

  login() {
    this.router.navigateByUrl('/login');
  }

  logout(): void {
    localStorage.clear();
    this.logged.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
  }
}
