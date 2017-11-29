import { NewsItem } from '../../core';
import { FilterFeedPipe } from './filter-feed.pipe';

describe('FilterFeedPipe', () => {
  let pipe: FilterFeedPipe;

  beforeAll(() => {
    pipe = new FilterFeedPipe();
  });

  it('should search title, url and user', () => {
    expect(
      pipe.transform(
        [
          { id: 0, title: 'bar', url: 'foo', user: 'foo' } as any,
          { id: 0, title: 'foo', url: 'bar', user: 'foo' } as any,
          { id: 0, title: 'foo', url: 'bar', user: 'bar' } as any,
          { id: 0, title: 'foo', url: 'foo', user: 'foo' } as any,
          { id: 0, title: 'foo', url: 'foo', user: 'foo' } as any
        ],
        'bar'
      ).length
    ).toEqual(3);
  });
});
