import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  @ViewChild('form') loginForm!: NgForm;
  isLogin: Boolean = false;

  togglePassword() {
    const toggleElem = document.getElementById('toggleElem');
    const input = <HTMLInputElement>document.getElementById('password');
    toggleElem?.classList.toggle('showing');
    input.type = input.type === 'password' ? 'text' : 'password';
    input?.focus();
  }

  submitForm() {
    console.log('submit');
  }

  changeFormAction() {
    this.isLogin = !this.isLogin;
    this.loginForm.resetForm();
    this.togglePassword();
  }
}
