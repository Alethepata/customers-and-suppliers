import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-reviews',
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
  providers: any[] = [];
  reviews: any[] = [];

  getApi() {
    axios.get('http://127.0.0.1:8000/api/providers',{
      headers: {
        'Authorization': 'Bearer ' + localStorage['token']
      }
    })
      .then((response) => {
        this.providers = response.data
        console.log(this.providers);
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  getReviews(id: any) {
    axios.get('http://127.0.0.1:8000/api/providers/' + id + '/reviews',{
      headers: {
        'Authorization': 'Bearer ' + localStorage['token']
      }
    })
      .then((response) => {
        this.reviews = response.data
        console.log(this.reviews);
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  ngOnInit() {
    this.getApi();
  }
}
