import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDetalleInvestigadorComponent } from './dialog-detalle-investigador.component';

describe('DialogDetalleInvestigadorComponent', () => {
  let component: DialogDetalleInvestigadorComponent;
  let fixture: ComponentFixture<DialogDetalleInvestigadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDetalleInvestigadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDetalleInvestigadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
