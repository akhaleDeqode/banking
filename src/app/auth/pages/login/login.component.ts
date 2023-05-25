import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  isFormSubmitted: boolean = false;
  loginForm!: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    });
  }

  get FormControl() {
    return this.loginForm.controls;
  }

  submit(): void {
    this.isFormSubmitted = true;
    console.log(this.loginForm.value);

  }
}
