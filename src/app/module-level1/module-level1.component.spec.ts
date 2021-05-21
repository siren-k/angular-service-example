import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleLevel1Component } from './module-level1.component';

describe('ModuleLevel1Component', () => {
  let component: ModuleLevel1Component;
  let fixture: ComponentFixture<ModuleLevel1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleLevel1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleLevel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
