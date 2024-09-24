import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldTableComponent } from './form-field-table.component';

describe('FormFieldTableComponent', () => {
  let component: FormFieldTableComponent;
  let fixture: ComponentFixture<FormFieldTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFieldTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormFieldTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
