import { TestBed } from '@angular/core/testing';

import { MascotasResolver } from './mascotas.resolver';

describe('MascotasResolver', () => {
  let resolver: MascotasResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(MascotasResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
