import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, delay, map, retryWhen, switchMap, tap } from 'rxjs/operators';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor {  
  constructor(
    private tokenS: TokenService
  ) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.tokenS.get();
    let request = req;
    if (token != null) {
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
    }
    return next.handle(request).pipe(
      catchError(err => {
        if (err instanceof HttpErrorResponse) {
          switch ((err as HttpErrorResponse).status) {
            case 401:
              const tokenN = this.tokenS.get();
              return this.manejarError401(request, next, tokenN || '');
            default:
              return throwError(err);
          }
        } else {
          return throwError(err);
        }
      }),
      retryWhen(err => {
        let retries = 1;
        return err.pipe(
          delay(1000),
          tap(() => console.log('reintentando petición', retries)),
          map(error => {
            if (retries++ === 3) {
              throw error;
            }
            return error;
          })
        );
      })
    );
  }

  private manejarError401(request: HttpRequest<any>, next: HttpHandler, tokenAntiguo: string) {
    return this.tokenS.refrescarToken(tokenAntiguo).pipe(
      switchMap((res: any) => {
        this.tokenS.handleToken(res['access_token']);
        this.tokenS.handleTokenRefresh(res['refres_token']);
        request = request.clone({
          setHeaders: {
            authorization: `Bearer ${res['access_token']}`,
            'Content-Type': 'application/json'
          }
        });
        return next.handle(request);
      })
    )
  }
}