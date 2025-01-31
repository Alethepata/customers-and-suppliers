import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';

  menu = [
    { title: "home", path: "/home" },
    { title: "register", path: "/register" },
    { title: "login", path: "/login" },
    { title: "user", path: "/user" },
    { title: "users", path: "/users" },
    { title: "reviews", path: "/reviews" },
  ];

  logout() {
      axios.post('http://127.0.0.1:8000/api/logout', null, {
        headers: {
          'Authorization': 'Bearer ' + localStorage['token']
        }
      })
      .then(function (response) {
        localStorage.removeItem('token');
      })
      .catch(function (error) {
        console.log(error);
      })
  }
}
