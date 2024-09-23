import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividerTableComponent } from './divider-table.component';

describe('DividerTableComponent', () => {
  let component: DividerTableComponent;
  let fixture: ComponentFixture<DividerTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DividerTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DividerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
