import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalstorageService } from '../services/localstorage.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private _localStorageService: LocalstorageService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this._localStorageService.Token;
    if (token) {
      request = request.clone({
        setHeaders: {
          Bearer: token,
          "Access-Control-Allow-Origin": "*"
        }
      });
    } else {
      request = request.clone({
        setHeaders: {
          "Access-Control-Allow-Origin": "*"
        }
      });
    }
    return next.handle(request);
  }
}
