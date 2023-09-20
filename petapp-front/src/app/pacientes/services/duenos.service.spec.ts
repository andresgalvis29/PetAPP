import { TestBed } from '@angular/core/testing';

import { DuenosService } from './duenos.service';

describe('DuenosService', () => {
  let service: DuenosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DuenosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
