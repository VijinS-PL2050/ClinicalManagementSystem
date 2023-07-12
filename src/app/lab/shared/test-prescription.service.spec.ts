import { TestBed } from '@angular/core/testing';

import { TestPrescriptionService } from './test-prescription.service';

describe('TestPrescriptionService', () => {
  let service: TestPrescriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestPrescriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
