import { TestBed } from '@angular/core/testing';

import { GetholidaysService } from './getholidays.service';

describe('GetholidaysService', () => {
  let service: GetholidaysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetholidaysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
