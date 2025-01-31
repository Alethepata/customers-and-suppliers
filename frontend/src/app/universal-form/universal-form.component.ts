import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import axios from 'axios';
import { ApiService } from '../utility/api.service';

@Component({
  selector: 'app-universal-form',
  imports: [FormsModule],
  templateUrl: './universal-form.component.html',
  styleUrl: './universal-form.component.css'
})
export class UniversalFormComponent {
  constructor(private ApiService: ApiService) { }

  @Input() apiUrl: any;
  @Input() token: any;
  @Input() method: any;

  name: string | undefined;
  email: string | undefined;
  password: number | undefined;
  supplier: boolean | undefined;
  id: number | undefined;


  async getSave() {

      // console.log(this.apiUrl.substr(6));

    await this.ApiService.getApi(this.method, this.apiUrl, this.token, {
      name: this.name,
      email: this.email,
      password: this.password,
      is_supplier: this.supplier
    });
  }

  save(){
    this.getSave();
  }
}
