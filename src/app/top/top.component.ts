import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-top',
  imports: [RouterLink, RouterLinkActive, MatMenuModule, MatButtonModule, MatIconModule],
  templateUrl: './top.component.html',
  styleUrl: './top.component.css'
})
export class TopComponent {

}
