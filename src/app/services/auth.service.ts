import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  setToken(token: string): void {
    localStorage.setItem('accessToken', token);
  }

  getCurrentToken() {
    const token = localStorage.getItem('accessToken');
    if (isNotNullOrUndefined(token)) {
      return token;
    } else {
      return null;
    }
  }

  isLoggedIn() {
    return localStorage.getItem('accessToken') !== null;
  }
}
