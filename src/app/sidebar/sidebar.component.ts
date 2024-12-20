import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-sidebar',
  imports: [MatExpansionModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
