import { TestBed } from '@angular/core/testing';

import { MascotaResolver } from './mascota.resolver';

describe('MascotaResolver', () => {
  let resolver: MascotaResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(MascotaResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
