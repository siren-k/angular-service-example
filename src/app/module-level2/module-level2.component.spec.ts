import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleLevel2Component } from './module-level2.component';

describe('ModuleLevel2Component', () => {
  let component: ModuleLevel2Component;
  let fixture: ComponentFixture<ModuleLevel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleLevel2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleLevel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
