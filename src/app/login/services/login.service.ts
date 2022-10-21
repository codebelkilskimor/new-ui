import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export const API_URL = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  iniciarSesion(data: any){
    return this.http.post(`${ API_URL }/auth/prevLogin`, data);
  }
}
