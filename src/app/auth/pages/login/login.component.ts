import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { Login } from 'src/app/core/models/auth.model';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  isFormSubmitted: boolean = false;
  loginForm!: FormGroup;
  private _unsubscribe$ = new Subject<boolean>();

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService
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
    if (this.loginForm.valid) {
      let paylod: Login = this.loginForm.value;
      this._authService.login(paylod).pipe(takeUntil(this._unsubscribe$)).subscribe({
        next: (res: any) => {
          console.log(res);

        }
      })
    }
  }

  ngOnDestroy(): void {
    this._unsubscribe$.next(true);
    this._unsubscribe$.complete();
  }

}
