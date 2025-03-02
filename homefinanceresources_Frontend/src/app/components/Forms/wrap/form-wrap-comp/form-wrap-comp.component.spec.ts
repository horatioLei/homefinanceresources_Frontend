import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWrapCompComponent } from './form-wrap-comp.component';

describe('FormWrapCompComponent', () => {
  let component: FormWrapCompComponent;
  let fixture: ComponentFixture<FormWrapCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormWrapCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormWrapCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
