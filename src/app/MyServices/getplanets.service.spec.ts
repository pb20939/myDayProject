import { TestBed } from '@angular/core/testing';

import { GetplanetsService } from './getplanets.service';

describe('GetplanetsService', () => {
  let service: GetplanetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetplanetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
