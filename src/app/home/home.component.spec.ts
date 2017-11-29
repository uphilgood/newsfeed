import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedModule } from '../shared';
import { CoreModule } from '../core';

import { FeedComponent } from './feed/feed.component';
import { FeedCardComponent } from './feed-card/feed-card.component';

describe('FeedCardComponent', () => {
  let component: FeedCardComponent;
  let fixture: ComponentFixture<FeedCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [FeedCardComponent]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
