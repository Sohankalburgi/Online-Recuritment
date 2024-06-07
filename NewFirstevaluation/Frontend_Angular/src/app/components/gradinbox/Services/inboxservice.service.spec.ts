import { TestBed } from '@angular/core/testing';

import { InboxserviceService } from './inboxservice.service';

describe('InboxserviceService', () => {
  let service: InboxserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InboxserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
