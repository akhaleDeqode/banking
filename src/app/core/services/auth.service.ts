import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, timeout } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login, Signup } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _base = environment.baseUrl;

  constructor(
    private _http: HttpClient
  ) { }

  signup(data: Signup): Observable<any> {
    return this._http.post(`${this._base}user/register`, data).pipe(timeout(75000), catchError((error: HttpErrorResponse) => {
      throw error;
    }));
  }

  login(data: Login): Observable<any> {
    return this._http.post(`${this._base}auth/login`, data).pipe(timeout(75000), catchError((error: HttpErrorResponse) => {
      throw error;
    }));
  }
}
