import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared';

import { HomeComponent } from './home.component';
import { FeedComponent } from './feed/feed.component';
import { FeedCardComponent } from './feed-card/feed-card.component';
import { FilterFeedPipe } from './filter-feed/filter-feed.pipe';

@NgModule({
  imports: [CommonModule, RouterModule, SharedModule],
  declarations: [FeedComponent, FeedCardComponent, HomeComponent, FilterFeedPipe]
})
export class HomeModule {}
