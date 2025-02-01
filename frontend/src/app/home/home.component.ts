import { Component } from '@angular/core';
import { JumbotronComponent } from '../partials/jumbotron/jumbotron.component';

@Component({
  selector: 'app-home',
  imports: [JumbotronComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
