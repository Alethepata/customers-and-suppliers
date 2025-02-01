import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../utility/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-universal-form',
  imports: [FormsModule],
  templateUrl: './universal-form.component.html',
  styleUrl: './universal-form.component.css'
})

export class UniversalFormComponent {
  constructor(private ApiService: ApiService, private router: Router) { }

  @Input() apiUrl: any;
  @Input() token: any;
  @Input() method: any;
  @Input() redirect: any;

  name: string | undefined;
  email: string | undefined;
  password: string | undefined;
  provider: boolean | undefined;
  id: number | undefined;

  messageName:any;
  messageEmail: any;
  messagePassword: any;


  async getSave() {
    let correctData = false;

    this.messageName = "";
    this.messageEmail = "";
    this.messagePassword = "";


    if (!this.name) {
      this.messageName = 'Compilare campo';
    } else if (this.name.length < 3) {
      this.messageName = 'Il numero minimo di caratteri è 3';
    }else if (this.name.length > 100) {
      this.messageName = 'Il numero massimo di caratteri è 100';
    }

    if (!this.email) {
      this.messageEmail = 'Compilare campo';
    } else if (!this.email.includes('@')) {
      this.messageEmail = 'Inserire email valida';
    }

    if (!this.password) {
      this.messagePassword = 'Compilare campo';
    } else if (this.password.length < 8) {
      this.messagePassword = 'Il numero minimo di caratteri è 8 ';
    }

    if (this.name
      && this.password
      && this.email
      && this.name.length >= 3
      && this.name.length <= 100
      && this.password.length >= 8
      && this.email.includes('@')) {
        correctData = true;
    }

    if (correctData) {
      await this.ApiService.getApi(this.method, this.apiUrl, this.token, {
        name: this.name,
        email: this.email,
        password: this.password,
        is_provider: this.provider == true ? 1 : 0
      });
      this.router.navigate([this.redirect]);
    }
  }

  save(){
    this.getSave();
  }

}
