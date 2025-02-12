import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-page-create-account',
  imports: [FormsModule],
  templateUrl: './page-create-account.component.html',
  styleUrl: './page-create-account.component.css'
})
export class PageCreateAccountComponent {
  data = {username: '', email: '', password: '', re_password: ''};

  constructor(private http: HttpClient){}

  createAccount(){
    this.http
      .post('http://localhost:8000/auth/users/', this.data)
      .subscribe((answer) => {
        console.log(answer);
      });
  }
}