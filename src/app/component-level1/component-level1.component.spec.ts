import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentLevel1Component } from './component-level1.component';

describe('ComponentLevel1Component', () => {
  let component: ComponentLevel1Component;
  let fixture: ComponentFixture<ComponentLevel1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentLevel1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentLevel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
