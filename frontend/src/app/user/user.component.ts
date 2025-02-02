import { Component } from '@angular/core';
import { ApiService } from '../utility/api.service';
import { CardComponent } from '../partials/card/card.component';

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  constructor(private ApiService: ApiService) { }

  name: string | undefined ;
  email: string | undefined;
  is_provider: string | undefined;

  async getUser() {
    const method = 'get';
    const apiUrl = 'user';
    const token = true;

    const data = await this.ApiService.getApi(method, apiUrl, token, null);
    this.name = data.name;
    this.email = data.email;
    this.is_provider = data.is_provider == 0 ? 'Cliente' : 'Fornitore' ;
  }

  ngOnInit() {
    this.getUser();
  }
}
