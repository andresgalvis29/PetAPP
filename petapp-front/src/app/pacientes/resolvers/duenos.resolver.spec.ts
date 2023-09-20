import { TestBed } from '@angular/core/testing';

import { DuenosResolver } from './duenos.resolver';

describe('DuenosResolver', () => {
  let resolver: DuenosResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(DuenosResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
