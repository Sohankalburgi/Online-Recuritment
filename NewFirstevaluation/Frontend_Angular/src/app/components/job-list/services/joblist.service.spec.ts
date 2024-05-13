import { TestBed } from '@angular/core/testing';

import { JoblistService } from './joblist.service';

describe('JoblistService', () => {
  let service: JoblistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JoblistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
