import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaVendedorComponent } from './consulta-vendedor.component';

describe('ConsultaVendedorComponent', () => {
  let component: ConsultaVendedorComponent;
  let fixture: ComponentFixture<ConsultaVendedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaVendedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
