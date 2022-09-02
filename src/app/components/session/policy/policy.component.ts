import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.scss']
})
export class PolicyComponent implements OnInit {
  lockTime = 2000;
  
  lockButton = true;
  constructor(private router: Router,
              private auth: AuthService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.lockButton = false;
    }, this.lockTime);
  }

  reject() {
    localStorage.clear();
    this.router.navigate(['/login'])
  }

  accept() {
    const user = localStorage.getItem('user_data');
    // @ts-ignore
    this.auth.setToken(user);
    localStorage.removeItem('user_data');
    this.router.navigate(['/home']);
    setTimeout(() => {
      window.location.reload();
    }, 10);
  }

}