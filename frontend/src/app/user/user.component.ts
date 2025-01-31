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
  is_supplier: number | undefined;

  async getUser() {
    const method = 'get';
    const apiUrl = 'user';
    const token = true;

    const data = await this.ApiService.getApi(method, apiUrl, token, null);
    this.name = data.name;
    this.email = data.email;
    this.is_supplier = data.is_supplier;
  }

  ngOnInit() {
    this.getUser();
  }
}
