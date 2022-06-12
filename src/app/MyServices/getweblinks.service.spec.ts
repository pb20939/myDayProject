import { TestBed } from '@angular/core/testing';

import { GetweblinksService } from './getweblinks.service';

describe('GetweblinksService', () => {
  let service: GetweblinksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetweblinksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
