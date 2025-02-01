import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../utility/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  constructor(private ApiService: ApiService, private router: Router) { }

  email: string | undefined;
  password: number | undefined;

  method = 'post';
  apiUrl = 'login';
  token = false;

  async getSave() {
    const data = await this.ApiService.getApi(this.method, this.apiUrl, this.token, {
      email: this.email,
      password: this.password,
    });

    if (localStorage['token']) {
      localStorage.removeItem('token');
    }

    localStorage.setItem('token', data);
  }

  submit(){
    this.getSave();
    this.router.navigate(['/dashboard']);
  }

}
