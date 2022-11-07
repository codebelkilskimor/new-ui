import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isNotNullOrUndefined } from 'codelyzer/util/isNotNullOrUndefined';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getCurrentToken() {
    const token = localStorage.getItem('token');
    if (isNotNullOrUndefined(token)) {
      return token;
    } else {
      return null;
    }
  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }
}
