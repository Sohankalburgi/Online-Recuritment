import { TestBed } from '@angular/core/testing';

import { StatusappointService } from './statusappoint.service';

describe('StatusappointService', () => {
  let service: StatusappointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatusappointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
