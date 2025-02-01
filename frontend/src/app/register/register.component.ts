import { Component } from '@angular/core';
import { UniversalFormComponent } from '../universal-form/universal-form.component';

@Component({
  selector: 'app-register',
  imports: [UniversalFormComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  apiUrl = 'register';
  token = null;
  method = 'post';
  redirect = '/login';
}


