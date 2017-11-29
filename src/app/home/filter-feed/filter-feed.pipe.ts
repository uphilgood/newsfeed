import { Pipe, PipeTransform } from '@angular/core';

import { NewsItem } from '../../core';

@Pipe({
  name: 'filterFeed'
})
export class FilterFeedPipe implements PipeTransform {
  transform(value: NewsItem[], filterString: string): NewsItem[] {
    return value.filter(
      item => item.title.indexOf(filterString) > -1 || item.url.indexOf(filterString) > -1
    );
  }
}
