import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor() { }

  async getApi(method:any, apiUrl: any, token: any, data: any) {
    const authorization = 'Bearer ' + localStorage['token'];

    try {
      const response = await axios({
        url: 'http://127.0.0.1:8000/api/' + apiUrl,
        method: method,
        data: data,
        headers: {
          'Authorization': token == true ? authorization : '',
          'Content-Type': 'application/json',
        }
      });

      console.log(response);

      return response.data;
    } catch (error) {
      console.error(`Errore durante la chiamata API: ${error}`);

      return  error;
    }
  }
}
