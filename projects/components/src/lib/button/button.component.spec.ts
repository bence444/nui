import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuiButtonComponent } from './button.component';

describe('NuiButtonComponent', () => {
  let component: NuiButtonComponent;
  let fixture: ComponentFixture<NuiButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuiButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuiButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
