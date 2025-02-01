import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../utility/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reviews-add',
  imports: [FormsModule, CommonModule],
  templateUrl: './reviews-add.component.html',
  styleUrl: './reviews-add.component.css'
})
export class ReviewsAddComponent {
  constructor(private ApiService: ApiService, private router: Router) { }

  rating: number | undefined;
  comment: string | undefined;
  provider: number | undefined;

  providers: any[] = [];

  async getProviders() {
    const method = 'get';
    const apiUrl = 'providers';
    const token = true;

    this.providers = await this.ApiService.getApi(method, apiUrl, token, null);
  }

  async submit() {
    const method = 'post';
    const apiUrl = 'reviews';
    const token = true;

    await this.ApiService.getApi(method, apiUrl, token, {
      rating: this.rating,
      comment: this.comment,
      provider_id: this.provider
    });

    this.router.navigate(['/reviews']);
  }

  ngOnInit() {
    this.getProviders();
  }
}
