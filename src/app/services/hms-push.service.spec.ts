import { TestBed } from '@angular/core/testing';

import { HmsPushService } from './hms-push.service';

describe('HmsPushService', () => {
  let service: HmsPushService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HmsPushService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
