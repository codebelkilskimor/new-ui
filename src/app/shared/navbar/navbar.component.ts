import { Component } from '@angular/core';
import { LoggedService } from '../../services/logged.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(
    private logged: LoggedService,
    private router: Router
  ) { }

  logout(): void {
    localStorage.clear()
    this.logged.changeAuthStatus(false)
    this.router.navigateByUrl('/login')
  }
}
