import { TestBed } from '@angular/core/testing';

import { LocalBlogService } from './local-blog.service';

describe('LocalBlogService', () => {
  let service: LocalBlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalBlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
