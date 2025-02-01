import { Component } from '@angular/core';
import { ApiService } from '../utility/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private ApiService: ApiService, private router: Router) { }

  async logout() {
    await this.ApiService.getApi('post', 'logout', true, null);
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
