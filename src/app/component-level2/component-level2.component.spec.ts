import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentLevel2Component } from './component-level2.component';

describe('ComponentLevel2Component', () => {
  let component: ComponentLevel2Component;
  let fixture: ComponentFixture<ComponentLevel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentLevel2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentLevel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
