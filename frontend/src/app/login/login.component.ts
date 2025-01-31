import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../utility/api.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  constructor(private ApiService: ApiService) { }

  email: string | undefined;
  password: number | undefined;

  method = 'post';
  apiUrl = 'login';
  token = false;

  async getSave() {
    await this.ApiService.getApi(this.method, this.apiUrl, this.token, {
      email: this.email,
      password: this.password,
    });
  }

  save(){
    this.getSave();

  }

}
