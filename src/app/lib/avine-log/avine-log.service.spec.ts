import { TestBed, inject } from '@angular/core/testing';

import { AvineLogService } from './avine-log.service';

describe('AvineLogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AvineLogService]
    });
  });

  it('should be created', inject([AvineLogService], (service: AvineLogService) => {
    expect(service).toBeTruthy();
  }));
});
