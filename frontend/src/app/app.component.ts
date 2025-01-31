import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import axios from 'axios';
import { ApiService } from './utility/api.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  constructor(private ApiService: ApiService) { }

  menu = [
    { title: "home", path: "/home" },
    { title: "register", path: "/register" },
    { title: "login", path: "/login" },
    { title: "user", path: "/user" },
    { title: "users", path: "/users" },
    { title: "reviews", path: "/reviews" },
  ];

  async logout() {
    localStorage.removeItem('token');
    await this.ApiService.getApi('post', 'logout', true, null);

  }
}
