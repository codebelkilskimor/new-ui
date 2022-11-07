import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { LoggedService } from '../../../services/logged.service';
import { LoginService } from '../../services/login.service';
import { TokenService } from '../../../services/token.service';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.scss'],
})
export class PolicyComponent implements OnInit {
  lockTime = 2000;
  
  lockButton = true;
  constructor(
    private router: Router,
    private auth: AuthService,
    private logged: LoggedService,
    private loginServ: LoginService,
    private tokenServ: TokenService
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.lockButton = false;
    }, this.lockTime);
  }

  reject() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  

  accept() {
    this.logged.changeAuthStatus(true)
    const usuData = JSON.parse(localStorage.getItem('user_data') || '')
    this.loginServ.aceptarPoliticas({email: usuData.correo_est}).subscribe(
      data => this.router.navigateByUrl('/admin/reportes')
    )
  }
}