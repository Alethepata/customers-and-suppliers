import { Component } from '@angular/core';
import { AsideComponent } from '../partials/aside/aside.component';
import { AppComponent } from "../app.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [AsideComponent, AppComponent, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
