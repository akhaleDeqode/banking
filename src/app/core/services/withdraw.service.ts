import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Withdraw } from '../models/withdraw.model';
import { Observable, catchError, timeout } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WithdrawService {

  private _base = environment.baseUrl;

  constructor(
    private _http: HttpClient
  ) { }

  withdrawAmount(data: Withdraw): Observable<any> {
    return this._http.post(`${this._base}transaction/`, data).pipe(timeout(75000), catchError((error: HttpErrorResponse) => {
      throw error;
    }));
  }

  getAllWithdrawals(): Observable<any> {
    return this._http.get(`${this._base}transaction/get/withdraws`).pipe(timeout(75000), catchError((error: HttpErrorResponse) => {
      throw error;
    }));
  }
}
