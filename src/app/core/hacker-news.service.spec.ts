import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HackerNewsService, HnApi, NewsItem } from './hacker-news.service';

describe('HackerNewsService', () => {
  let service: HackerNewsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HackerNewsService]
    });

    service = TestBed.get(HackerNewsService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch a news list', () => {
    const sampleNews: Partial<NewsItem>[] = [
      { id: 0, time: 100000 },
      { id: 1, time: 100000 },
      { id: 2, time: 100000 },
      { id: 3, time: 100000 },
      { id: 4, time: 100000 },
      { id: 5, time: 100000 }
    ];

    service.getNews().subscribe(news => {
      expect(news).toBe(6);
      expect(news).toEqual(sampleNews);
    });

    const req = httpMock.expectOne(HnApi);

    expect(req.request.method).toBe('GET');

    req.flush(sampleNews);
  });
});