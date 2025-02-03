import { Component, Input } from '@angular/core';
import { ApiService } from '../../utility/api.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [RouterLink, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  constructor(private ApiService: ApiService) { }

  @Input() name: any;
  @Input() email: any;
  @Input() isProvider: any;
  @Input() id: any;
  @Input() delete: any;
  @Input() edit: any;
  @Input() token: any;
  @Input() data: any []= [];


  async getDelete(id: any) {
    const url = 'users/' + id;
    await this.ApiService.getApi('delete', url, this.token, null);
  }

}
