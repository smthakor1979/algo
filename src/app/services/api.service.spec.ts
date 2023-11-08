import { TestBed } from '@angular/core/testing';

import { ApiHttpService } from './api.service';

describe('ApiHttpService', () => {
  let service: ApiHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
