import { Component } from '@angular/core';
import axios from 'axios';
import { ApiService } from '../utility/api.service';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  constructor(private ApiService: ApiService) { }

  name: string | undefined ;
  email: string | undefined;
  is_provider: number | undefined;

  async getUser() {
    const method = 'get';
    const apiUrl = 'user';
    const token = true;

    const data = await this.ApiService.getApi(method, apiUrl, token, null);
    this.name = data.name;
    this.email = data.email;
    this.is_provider = data.is_provider;
  }

  ngOnInit() {
    this.getUser();
  }
}
