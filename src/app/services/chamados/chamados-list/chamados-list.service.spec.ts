import { TestBed } from '@angular/core/testing';

import { ChamadosListService } from './chamados-list.service';

describe('ChamadosListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChamadosListService = TestBed.get(ChamadosListService);
    expect(service).toBeTruthy();
  });
});
