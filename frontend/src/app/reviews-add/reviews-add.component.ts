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

  messageRating: any;
  messageProvider: any;
  messageComment: any;
  errorMessage: any;


  async getProviders() {
    const method = 'get';
    const apiUrl = 'providers';
    const token = true;

    this.providers = await this.ApiService.getApi(method, apiUrl, token, null);
  }

  async submit() {
    let correctData = false;

    this.messageProvider = "";
    this.messageRating = "";
    this.messageComment = "";

    if (this.provider == undefined) {
      this.messageProvider = 'Compilare campo';
    }

    if (this.rating == undefined ) {
      this.messageRating = 'Compilare campo';
    } else if (this.rating < 0) {
      this.messageRating = 'Il voto minimo è 0';
    }else if (this.rating > 5) {
      this.messageRating = 'Il voto massimo è 5';
    }

    if (this.comment && this.comment.length > 255) {
      this.messageComment = 'Il commento può avere massimo 255 caratteri';
    }

    if (this.rating != undefined
      && this.provider != undefined
      && this.rating >= 0
      && this.rating <= 5) {
        if (this.comment && this.comment.length < 255) {
          correctData = true;
        } else if (!this.comment) {
          correctData = true;
        }

    }

    if (correctData) {
      const method = 'post';
      const apiUrl = 'reviews';
      const token = true;

      const data = await this.ApiService.getApi(method, apiUrl, token, {
        rating: this.rating,
        comment: this.comment,
        provider_id: this.provider
      });

      if (data == 'Non puoi lasciare recensioni') {
        this.errorMessage = data;
      } else {
        this.router.navigate(['/dashboard/reviews']);
      }
    }
  }

  ngOnInit() {
    this.getProviders();
  }
}
