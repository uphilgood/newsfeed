import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { NewsItem } from '../../core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-feed-card',
  template: `
  <app-card> 
  <div class = "container">
  <h2>{{news.title}}</h2>
  <p class = "url">{{news.url}}<p>
  <img src="../../../assets/chat-count.svg" alt="Description" style="width:7%"/>

  <div class="text-block"> 
  <p>{{news.points}} </p>
  <p> <strong>{{news.user}}</strong> {{news.time_ago}}</p>
  </div>
  </div>
  </app-card>
`,
  styleUrls: ['./feed-card.component.scss']
})
export class FeedCardComponent {
  @Input() news: NewsItem;
}
