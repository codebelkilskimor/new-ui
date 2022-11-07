import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  urlServ  = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) {}

  handleToken(token: any) {
    this.set(token);
  }

  handleTokenRefresh(tokenRefresh: any) {
    this.setRefresh(tokenRefresh);
  }

  set(token: any) {
    localStorage.setItem('token', token);
  }

  setRefresh(token: any) {
    localStorage.setItem('tokenR', token);
  }

  get() {
    return localStorage.getItem('token');
  }

  getRefresh() {
    return localStorage.getItem('tokenR');
  }

  delete() {
    localStorage.removeItem('token');
  }

  deleteRefresh() {
    localStorage.removeItem('tokenR');
  }

  isValid() {
    const token = this.get();
    return (token != null) ? true : false;
  }

  loggedIn() {
    return this.isValid();
  }

  refrescarToken(token: any) {
    const formData = new FormData();
    formData.append('refresh_token', token);
    return this.http.post(`${this.urlServ}/auth/refrescar_token`, formData);
  }
}
