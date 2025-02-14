import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-page-friends',
  imports: [],
  templateUrl: './page-friends.component.html',
  styleUrl: './page-friends.component.css'
})
export class PageFriendsComponent {
  friendsAmount: any = 0;

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

      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`)

      this.http
      .post(`http://localhost:8000/getFriendAmount/${userID}/`, '',  { headers })
      .subscribe(
        (result: any) => {
        this.friendsAmount = result.friend_count;
        },
        (error) => {
          console.error('Error fetching amount: ', error);
        }
        
      );
    } else {
      console.error('Token not found in local storage');
    }
    
  }

}
