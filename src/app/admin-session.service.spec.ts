import { TestBed, inject } from '@angular/core/testing';

import { AdminSessionService } from './admin-session.service';

describe('AdminSessionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminSessionService]
    });
  });

  it('should be created', inject([AdminSessionService], (service: AdminSessionService) => {
    expect(service).toBeTruthy();
  }));
});
