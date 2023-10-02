import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouterControlsComponent } from './couter-controls.component';

describe('CouterControlsComponent', () => {
  let component: CouterControlsComponent;
  let fixture: ComponentFixture<CouterControlsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CouterControlsComponent]
    });
    fixture = TestBed.createComponent(CouterControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
