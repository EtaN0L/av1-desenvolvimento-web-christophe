import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from "@angular/material/form-field";

@Component({
  selector: 'app-top',
  imports: [RouterLink, RouterLinkActive, MatMenuModule, MatButtonModule, MatIconModule, MatFormFieldModule],
  templateUrl: './top.component.html',
  styleUrl: './top.component.css'
})
export class TopComponent {


  logout() {
    localStorage.setItem('accessToken', '');
  }
}
