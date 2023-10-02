import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouterOutputsComponent } from './couter-outputs.component';

describe('CouterOutputsComponent', () => {
  let component: CouterOutputsComponent;
  let fixture: ComponentFixture<CouterOutputsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CouterOutputsComponent]
    });
    fixture = TestBed.createComponent(CouterOutputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
