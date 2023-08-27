import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _registerURL = 'http://localhost:3000/api/register';
  private _loginURL = 'http://localhost:3000/api/login';

  constructor(private http: HttpClient) {}

  registerUser(user: UserModel) {
    return this.http.post(this._registerURL, user);
  }

  loginUser(user: UserModel) {
    return this.http.post(this._loginURL, user);
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
