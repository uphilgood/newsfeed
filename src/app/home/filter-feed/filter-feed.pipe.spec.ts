import { FilterFeedPipe } from './filter-feed.pipe';

fdescribe('FilterFeedPipe', () => {
  let pipe: FilterFeedPipe;

  beforeAll(() => {
    pipe = new FilterFeedPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});
