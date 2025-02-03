import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ApiService } from '../utility/api.service';
import { LoaderComponent } from '../partials/loader/loader.component';

@Component({
  selector: 'app-reviews',
  imports: [CommonModule, RouterOutlet, RouterLink, LoaderComponent],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
  constructor(private ApiService: ApiService) { }

  providers: any[] = [];
  reviews: any[] = [];
  numbers: any[] = [];
  token = true;
  loader = true;

  async getProvider() {
    const data = await this.ApiService.getApi('get', 'providers', this.token, null);
    this.providers = data;
    this.loader = false;
  }

  generateNumber() {
    this.numbers = [];
    let i = 0;
    while (i <= 5) {
      this.numbers.push(i);
      i++;
    }
  }

  async getReviews(id: any) {
    this.loader = true;
    const data = await this.ApiService.getApi('get', 'providers/' + id + '/reviews', this.token, null);
    this.reviews = data;
    this.generateNumber()
    this.loader = false;
  }

  ngOnInit() {
    this.getProvider();
  }
}
