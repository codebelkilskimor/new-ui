import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { LoggedService } from '../../../services/logged.service';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.scss'],
})
export class PolicyComponent implements OnInit {
  lockTime = 5000;
  lockButton = true;
  constructor(
    private router: Router,
    private auth: AuthService,
    private logged: LoggedService
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
    const user = localStorage.getItem('user_data');
    // @ts-ignore
    this.auth.setToken(user);
    localStorage.removeItem('user_data');
    this.logged.changeAuthStatus(true)
    this.router.navigateByUrl('/home');
  }
}
