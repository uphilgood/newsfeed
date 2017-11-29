import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { NewsItem } from '../../core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-feed-card',
  template: `
    <app-card>{{ news | json }}</app-card>
  `,
  styleUrls: ['./feed-card.component.scss']
})
export class FeedCardComponent {
  @Input() news: NewsItem;
}
