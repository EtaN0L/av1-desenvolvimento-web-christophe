import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { TopComponent } from "./top/top.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ProgressBarComponent } from "./progress-bar/progress-bar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, TopComponent, SidebarComponent, ProgressBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'av1-desenvolvimento-web-christophe';
}
