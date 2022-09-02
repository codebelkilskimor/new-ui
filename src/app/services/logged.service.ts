import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedService {
  private authStatus = new BehaviorSubject<boolean>(this.auth.isLoggedIn());
  authStatus$ = this.authStatus.asObservable();
  constructor(
    private auth: AuthService
  ) { }
  changeAuthStatus(value: boolean) {
    this.authStatus.next(value)
  }
}
