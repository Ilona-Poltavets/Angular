import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EcologyNavbarComponent } from "../ecology-navbar/ecology-navbar.component";
import { EcologyFooterComponent } from "../ecology-footer/ecology-footer.component";
import { EcologyHomeComponent } from "../ecology-home/ecology-home.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ecology',
  standalone: true,
  imports: [EcologyNavbarComponent, EcologyFooterComponent, RouterOutlet, EcologyHomeComponent,CommonModule],
  templateUrl: './ecology.component.html',
  styleUrl: './ecology.component.scss'
})
export class EcologyComponent {
  isHomeVisible = true;
}
