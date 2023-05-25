import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToasterService } from './toaster.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {


  constructor(
    private _toasterService: ToasterService
  ) { }

  handleError(error: HttpErrorResponse): void {
    // console.log(error);
    this._toasterService.error('Error', error?.error?.message || 'Something went wrong');
  }
}
