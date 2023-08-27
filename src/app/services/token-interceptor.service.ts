import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpParams,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injector } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let authService = this.injector.get(AuthService);
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authService.getToken()}`,
      },
    });
    return next.handle(tokenizedReq);
  }
}
