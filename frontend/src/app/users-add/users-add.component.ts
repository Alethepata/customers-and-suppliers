import { Component } from '@angular/core';
import { UniversalFormComponent } from '../universal-form/universal-form.component';

@Component({
  selector: 'app-users-add',
  imports: [UniversalFormComponent],
  templateUrl: './users-add.component.html',
  styleUrl: './users-add.component.css'
})
export class UsersAddComponent {
  apiUrl = 'users';
  token = true;
  method = 'post';
  redirect = '/dashboard/users';
}
