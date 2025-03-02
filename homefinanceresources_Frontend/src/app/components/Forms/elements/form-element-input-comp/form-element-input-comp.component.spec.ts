import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormElementInputCompComponent } from './form-element-input-comp.component';

describe('FormElementInputCompComponent', () => {
  let component: FormElementInputCompComponent;
  let fixture: ComponentFixture<FormElementInputCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormElementInputCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormElementInputCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
