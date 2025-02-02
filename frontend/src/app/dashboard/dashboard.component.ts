import { Component } from '@angular/core';
import { ApiService } from '../utility/api.service';
import { Router, RouterOutlet } from '@angular/router';
import { AsideComponent } from '../partials/aside/aside.component';

@Component({
  selector: 'app-dashboard',
  imports: [AsideComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
