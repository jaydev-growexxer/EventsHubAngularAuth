import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashbaord',
  templateUrl: './dashbaord.component.html',
  styleUrls: ['./dashbaord.component.scss'],
})
export class DashbaordComponent {
  constructor(
    private http: HttpClient,
    private router: Router,
    private _auth: AuthService
  ) {
    this.http.get('http://localhost:3000/api/users').subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (err: any) => {
        console.log(err);
        if (err instanceof HttpErrorResponse) {
          this.router.navigate(['authenticate']);
        }
      },
    });
  }
  onLogOut() {
    if (window.confirm('Do you really want to leave?')) {
      localStorage.removeItem('token');
      this.router.navigate(['authenticate']);
    }
  }
}
