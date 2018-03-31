import { Component, OnInit } from '@angular/core';

import { HackerNewsService, NewsItem } from '../core';

@Component({
  selector: 'app-home',
  template: `
    <div class="input-container">
      <input type="text" placeholder="Search News" #search (keyup)="onKeyUp(search.value)">
    </div>

    <app-feed *ngIf="!loading" [news]="news"></app-feed>

    <app-loader *ngIf="loading"></app-loader>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading = false;
  news: NewsItem[] = [];
  updatedNews: NewsItem[] = [];
  news2: NewsItem[] = [];

  constructor(private hn: HackerNewsService) {}

  ngOnInit() {
    this.loading = true;

    this.hn.getNews().subscribe(data => {
      this.loading = false;
      this.news = data;
      this.news2 = data;
    });
  }

  onKeyUp(value: string) {
    this.updatedNews = [];
    this.news = this.news2;
    this.news.forEach(items => (items.title.includes(value) || items.url.includes(value) || items.user.includes(value) ) ?
        this.updatedNews.push(items):
        this.news = this.updatedNews)
        console.log(this.news);
    }
    // for(var i=0;i<this.news.length;i++){
    //   if(this.news[i].title.includes(value) || this.news[i].user.includes(value)){
    //     this.updatedNews.push(this.news[i]);
    //   }
    // }
    //this.news = this.updatedNews;

  }
//}
