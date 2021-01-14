import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsService {
  API_URL='http://newsapi.org/v2';
  API_KEY='649767ab1b68412abd8b843a65d04880';
  constructor(private http:HttpClient) { }
  getNews(url){
    return this.http.get(`${this.API_URL}/${url}&apiKey=${this.API_KEY}`)
  }
}
