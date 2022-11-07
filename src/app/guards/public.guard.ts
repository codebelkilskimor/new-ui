import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from "../services/auth.service";


@Injectable({
  providedIn: 'root'
})
export class PublicGuard implements CanActivate {
  constructor(private auth: AuthService,
              private router: Router){
  }

  canActivate() {
    window.scrollTo(0, 0);
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['/admin/reportes']);
      return false;
    } else {
      return true;
    }
  }
}
