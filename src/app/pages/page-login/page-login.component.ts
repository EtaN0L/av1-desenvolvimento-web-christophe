import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-login',
  imports: [FormsModule, RouterModule],
  templateUrl: './page-login.component.html',
  styleUrl: './page-login.component.css'
})
export class PageLoginComponent {
  data = {username: '', password: ''};
  message = '';
  token ='';
  constructor(private http: HttpClient, private router: Router){}

  login(){
    this.http
    .post('http://localhost:8000/auth/jwt/create/', this.data)
    .subscribe({
      next: (answer: any) => {
        this.token = answer.access;
        localStorage.setItem("accessToken", this.token);
        this.router.navigate(['/page-home']);
        
      },
      error: (error:any) => {
        this.message = "Incorrect credentials.";
      }
    });
  }
}
