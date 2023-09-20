import { TestBed } from '@angular/core/testing';

import { CitasResolver } from './citas.resolver';

describe('CitasResolver', () => {
  let resolver: CitasResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CitasResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
