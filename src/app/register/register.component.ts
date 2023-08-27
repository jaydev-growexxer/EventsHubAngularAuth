import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  @ViewChild('form') loginForm!: NgForm;
  isLogin: Boolean = false;

  constructor(private _auth: AuthService, private _router: Router) {}

  togglePassword() {
    const toggleElem = document.getElementById('toggleElem');
    const input = <HTMLInputElement>document.getElementById('password');
    toggleElem?.classList.toggle('showing');
    input.type = input.type === 'password' ? 'text' : 'password';
    input?.focus();
  }

  submitForm() {
    if (this.isLogin) {
      this.loginUser();
    } else {
      this.registerUser();
    }
  }

  changeFormAction() {
    this.isLogin = !this.isLogin;
    this.loginForm.resetForm();
  }

  loginUser() {
    this._auth
      .loginUser({
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      })
      .subscribe({
        next: (res: any) => {
          console.log(res);
          localStorage.setItem('token', res.data);
          this._router.navigate(['dashbaord']);
        },
        error: (err: any) => {
          console.log(err);
        },
      });
  }

  registerUser() {
    this._auth
      .registerUser({
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      })
      .subscribe({
        next: (res: any) => {
          console.log(res);
          localStorage.setItem('token', res.data);
          this._router.navigate(['dashbaord']);
        },
        error: (err: any) => {
          console.log(err);
        },
      });
  }
}
