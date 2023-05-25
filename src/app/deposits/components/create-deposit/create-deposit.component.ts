import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-create-deposit',
  templateUrl: './create-deposit.component.html',
  styleUrls: ['./create-deposit.component.scss']
})
export class CreateDepositComponent {

  depositForm!: FormGroup;
  isFormSubmitted: boolean = false;
  private _unsubscribe$ = new Subject<boolean>();

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.depositForm = this._formBuilder.group({
      accountId: [null, [Validators.required]],
      amount: [null, [Validators.required]],
      transactionType: ['deposit']
    });
  }

  get FormControl() {
    return this.depositForm.controls;
  }

  submit(): void {
    this.isFormSubmitted = true;
    console.log(this.depositForm.value);

  }

  ngOnDestroy(): void {
    this._unsubscribe$.next(true);
    this._unsubscribe$.complete();
  }

}
