import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgRxPageComponent } from './ng-rx-page.component';

describe('NgRxPageComponent', () => {
  let component: NgRxPageComponent;
  let fixture: ComponentFixture<NgRxPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgRxPageComponent]
    });
    fixture = TestBed.createComponent(NgRxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
