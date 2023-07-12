import { TestBed } from '@angular/core/testing';

import { BillTestService } from './bill-test.service';

describe('BillTestService', () => {
  let service: BillTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BillTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
