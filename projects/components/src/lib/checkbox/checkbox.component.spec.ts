import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuiCheckboxComponent } from './checkbox.component';

describe('NuiCheckboxComponent', () => {
  let component: NuiCheckboxComponent;
  let fixture: ComponentFixture<NuiCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuiCheckboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuiCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
