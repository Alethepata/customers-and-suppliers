import { ActivatedRoute } from '@angular/router';
import { UniversalFormComponent } from './../universal-form/universal-form.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users-update',
  imports: [UniversalFormComponent],
  templateUrl: './users-update.component.html',
  styleUrl: './users-update.component.css'
})
export class UsersUpdateComponent {
  constructor(private route: ActivatedRoute) { }

  apiUrl = '';
  token = true;
  method = 'put';
  redirect = '/dashboard/users';

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.apiUrl = 'users/' + id;
  }

}
