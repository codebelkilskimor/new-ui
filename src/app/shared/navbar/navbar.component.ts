import { Component } from '@angular/core';
import { LoggedService } from '../../services/logged.service';
import { Router } from '@angular/router';
import { DatosUsuService } from '../services/datos-usu.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  loggedIn = false;
  datosUsu: any;
  constructor(
    private logged: LoggedService,
    private router: Router,
    private datosUsuServ: DatosUsuService
  ) {
    this.datosUsu = null;
    this.logged.authStatus$.subscribe((logStatus) => {
      if (logStatus) {
        console.log('Cambie');
        this.getDatosUsu();
      }
      this.loggedIn = logStatus;
    });
  }

  login() {
    this.router.navigateByUrl('/login');
  }

  getDatosUsu() {
    this.datosUsuServ
      .getDatosUsu()
      .subscribe((datos) => (this.datosUsu = datos));
  }

  logout(): void {
    localStorage.clear();
    this.logged.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
  }

  irBiblioteca() {
    window.location.href = 'https://bibliotecadigital.usb.edu.co/';
  }
}
