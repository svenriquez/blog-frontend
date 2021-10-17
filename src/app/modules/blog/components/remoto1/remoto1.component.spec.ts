import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Remoto1Component } from './remoto1.component';

describe('Remoto1Component', () => {
  let component: Remoto1Component;
  let fixture: ComponentFixture<Remoto1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Remoto1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Remoto1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
