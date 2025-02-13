import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-page-friends',
  imports: [],
  templateUrl: './page-friends.component.html',
  styleUrl: './page-friends.component.css'
})
export class PageFriendsComponent {
  friendsAmount = 0;

  public tableData: any[] = [];

  constructor(private http: HttpClient){}

  ngOnInit(): void{
    this.fetchFriendsAmount();
  }

  fetchFriendsAmount() {
    var token = localStorage.getItem('accessToken');
    if (token) {
      const decodedToken: any = jwtDecode(token);
      const userID = decodedToken.user_id;
      console.log(userID);
    }
    
  }

}
