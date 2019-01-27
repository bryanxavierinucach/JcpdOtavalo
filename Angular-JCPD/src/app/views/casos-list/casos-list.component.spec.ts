import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CasosListComponent } from './casos-list.component';
import { CasosModule } from './casos-list.module';

describe('TablesComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CasosModule, RouterTestingModule ],
    })
    .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(CasosListComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
