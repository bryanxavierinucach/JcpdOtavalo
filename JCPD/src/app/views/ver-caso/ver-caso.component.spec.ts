import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCasoComponent } from './ver-caso.component';

describe('VerCasoComponent', () => {
  let component: VerCasoComponent;
  let fixture: ComponentFixture<VerCasoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerCasoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerCasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
