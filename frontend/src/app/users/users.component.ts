import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../utility/api.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../partials/card/card.component';
import { LoaderComponent } from '../partials/loader/loader.component';

@Component({
  selector: 'app-users',
  imports: [CommonModule, RouterLink, FormsModule, CardComponent, LoaderComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})

export class UsersComponent {
  constructor(private ApiService: ApiService) { }

  users: any[] = [];
  filter: string | undefined;
  token = true;
  loader = true;

  async getUsers() {
    this.loader = true;
    this.users = [];

    const data = await this.ApiService.getApi('get', 'users', this.token, null);

    if (this.filter == 'provider') {

      data.forEach((user: { is_provider: number; }) => {
        if (user.is_provider == 1) {
          this.users.push(user);
        }
      })

    } else if (this.filter == 'customer') {

      data.forEach((user: { is_provider: number; }) => {
        if (user.is_provider == 0) {
          this.users.push(user);
        }
      })

    } else {
      this.users = data;
    }

    this.loader = false;
  }

  deleteFilter() {
    this.filter = '';
    this.getUsers()
  }


  ngOnInit() {
    this.getUsers();
  }
}


