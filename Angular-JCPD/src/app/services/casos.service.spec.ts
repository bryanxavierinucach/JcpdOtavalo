import { TestBed } from '@angular/core/testing';

import { CasosService } from './casos.service';

describe('CasosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CasosService = TestBed.get(CasosService);
    expect(service).toBeTruthy();
  });
});
