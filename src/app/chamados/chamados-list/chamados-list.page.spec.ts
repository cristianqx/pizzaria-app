import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadosListPage } from './chamados-list.page';

describe('ChamadosListPage', () => {
  let component: ChamadosListPage;
  let fixture: ComponentFixture<ChamadosListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChamadosListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamadosListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
