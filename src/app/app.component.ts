import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderMainComponent } from "./header-main/header-main.component";
import { HomeGridComponent } from "./home-grid/home-grid.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderMainComponent, HomeGridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'main-frontend';
}
