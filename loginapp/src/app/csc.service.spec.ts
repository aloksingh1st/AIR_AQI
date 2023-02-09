import { TestBed } from '@angular/core/testing';

import { CscService } from './csc.service';

describe('CscService', () => {
  let service: CscService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CscService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
