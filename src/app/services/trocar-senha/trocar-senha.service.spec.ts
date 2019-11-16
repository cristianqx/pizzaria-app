import { TestBed } from '@angular/core/testing';

import { TrocarSenhaService } from './trocar-senha.service';

describe('TrocarSenhaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrocarSenhaService = TestBed.get(TrocarSenhaService);
    expect(service).toBeTruthy();
  });
});
