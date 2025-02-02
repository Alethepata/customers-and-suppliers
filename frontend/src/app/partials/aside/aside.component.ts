import { Component } from '@angular/core';
import { ApiService } from '../../utility/api.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aside',
  imports: [CommonModule, RouterLink],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {
  constructor(private ApiService: ApiService, private router: Router) { }

  menu = [
    // { title: "Dashboard", path: "/dashboard", class: 'fa-solid fa-chart-line'},
    { title: "User", path: "user", class: 'fa-solid fa-user'},
    { title: "Users", path: "users", class: 'fa-solid fa-users' },
    { title: "Reviews", path: "reviews", class: 'fa-solid fa-comments' },
  ];

  async logout() {
    await this.ApiService.getApi('post', 'logout', true, null);
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
