import { TestBed } from '@angular/core/testing';

import { AdmininboxserviceService } from './admininboxservice.service';

describe('AdmininboxserviceService', () => {
  let service: AdmininboxserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmininboxserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
