import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, timeout } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransationService {

  private _base = environment.baseUrl;

  constructor(
    private _http: HttpClient
  ) { }

  getAllTransactions(): Observable<any> {
    return this._http.get(`${this._base}transaction`).pipe(timeout(75000), catchError((error: HttpErrorResponse) => {
      throw error;
    }));
  }
}
