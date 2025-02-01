import { Component } from '@angular/core';
import axios from 'axios';
import { CommonModule } from '@angular/common';
import { ApiService } from '../utility/api.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})

export class UsersComponent {
  constructor(private ApiService: ApiService) { }

  users: any[] = [];
  token = true;
  filter: string | undefined;

  async getUsers() {
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
  }

  deleteFilter() {
    this.filter = '';
    this.getUsers()
  }

  async delete(id: any) {
    console.log(id);
    const url = 'users/' + id;
    await this.ApiService.getApi('delete', url, this.token, null);
  }

  ngOnInit() {
    this.getUsers();
  }
}


