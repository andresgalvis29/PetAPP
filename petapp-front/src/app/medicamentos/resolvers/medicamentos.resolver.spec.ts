import { TestBed } from '@angular/core/testing';

import { MedicamentosResolver } from './medicamentos.resolver';

describe('MedicamentosResolver', () => {
  let resolver: MedicamentosResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(MedicamentosResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
