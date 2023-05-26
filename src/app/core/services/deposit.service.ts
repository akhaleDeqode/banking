import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, timeout } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Deposit } from '../models/deposit.model';

@Injectable({
  providedIn: 'root'
})
export class DepositService {

  private _base = environment.baseUrl;

  constructor(
    private _http: HttpClient
  ) { }

  depositAmount(data: Deposit): Observable<any> {
    return this._http.post(`${this._base}transaction/`, data).pipe(timeout(75000), catchError((error: HttpErrorResponse) => {
      throw error;
    }));
  }

  getAllDeposits(): Observable<any> {
    return this._http.get(`${this._base}transaction/get/deposits`).pipe(timeout(75000), catchError((error: HttpErrorResponse) => {
      throw error;
    }));
  }
}
