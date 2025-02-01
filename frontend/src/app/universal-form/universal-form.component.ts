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
  password: number | undefined;
  provider: boolean | undefined;
  id: number | undefined;


  async getSave() {
    await this.ApiService.getApi(this.method, this.apiUrl, this.token, {
      name: this.name,
      email: this.email,
      password: this.password,
      is_provider: this.provider == true ? 1 : 0
    });
  }

  save(){
    this.getSave();
    this.router.navigate([this.redirect]);
  }
}
