import { TestBed } from '@angular/core/testing';

import { SavService } from './sav.service';

describe('SavService', () => {
  let service: SavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
