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
  password: string | undefined;

  method = 'post';
  apiUrl = 'login';
  token = false;

  messageEmail: any;
  messagePassword: any;


  async getSave() {
    let correctData = false;

    this.messageEmail = "";
    this.messagePassword = "";

    if (!this.email) {
      this.messageEmail = 'Compilare campo';
    } else if (!this.email.includes('@')) {
      this.messageEmail = 'Inserire email valida';
    }

    if (!this.password) {
      this.messagePassword = 'Compilare campo';
    }

    if (this.password && this.email && this.email.includes('@')) {
      correctData = true;
    }

    if (correctData) {
      const data = await this.ApiService.getApi(this.method, this.apiUrl, this.token, {
        email: this.email,
        password: this.password,
      });

      if (data == 'Credenziali non valide') {
        this.messageEmail = "Credenziali non valide";

        this.messagePassword = "Credenziali non valide";
      } else {

        if (localStorage['token']) {
          localStorage.removeItem('token');
        }

        localStorage.setItem('token', data);

        this.router.navigate(['/dashboard']);
      }
    }
  }

  submit(){
    this.getSave();
  }

}
