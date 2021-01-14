import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  articles: any
  constructor(private NewsService:NewsService) {this.loadNews() }
  loadNews() {this.NewsService.getNews("top-headlines?country=us")
  .subscribe(news=>{this.articles=news['articles'];
  console.log(this.articles);})}

  ngOnInit() {
  }

}
