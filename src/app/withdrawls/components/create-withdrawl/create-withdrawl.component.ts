import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-create-withdrawl',
  templateUrl: './create-withdrawl.component.html',
  styleUrls: ['./create-withdrawl.component.scss']
})
export class CreateWithdrawlComponent {

  withdrawalForm!: FormGroup;
  isFormSubmitted: boolean = false;
  private _unsubscribe$ = new Subject<boolean>();

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.withdrawalForm = this._formBuilder.group({
      accountId: [null, Validators.required],
      amount: [null, Validators.required],
      transactionType: ['withdrawal']
    });
  }

  get FormControl() {
    return this.withdrawalForm.controls;
  }

  submit(): void {
    this.isFormSubmitted = true;
    console.log(this.withdrawalForm.value);

  }

  ngOnDestroy(): void {
    this._unsubscribe$.next(true);
    this._unsubscribe$.complete();
  }
}
