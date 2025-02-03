import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ApiService } from '../utility/api.service';
import { CardComponent } from '../partials/card/card.component';

@Component({
  selector: 'app-reviews',
  imports: [CommonModule, RouterOutlet, RouterLink, CardComponent],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
  constructor(private ApiService: ApiService) { }

  providers: any[] = [];
  reviews: any[] = [];
  numbers: any[] = [];
  token = true;

  async getProvider() {
    const data = await this.ApiService.getApi('get', 'providers', this.token, null);
    this.providers = data;
  }

  generateNumber() {
    let i = 0;
    while (i <= 5) {
      this.numbers.push(i);
      i++;
    }
  }

  async getReviews(id: any) {
    const data = await this.ApiService.getApi('get', 'providers/' + id + '/reviews', this.token, null);
    this.reviews = data;
    this.generateNumber()
  }

  ngOnInit() {
    this.getProvider();
  }
}
