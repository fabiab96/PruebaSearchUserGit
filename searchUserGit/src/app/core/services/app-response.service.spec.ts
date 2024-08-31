import { TestBed } from '@angular/core/testing';

import { AppResponseService } from './app-response.service';

describe('AppResponseService', () => {
  let service: AppResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
