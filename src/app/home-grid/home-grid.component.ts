import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkActive, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-grid',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './home-grid.component.html',
  styleUrl: './home-grid.component.scss'
})
export class HomeGridComponent {

}
