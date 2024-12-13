import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefferalComponent } from './refferal.component';

describe('RefferalComponent', () => {
  let component: RefferalComponent;
  let fixture: ComponentFixture<RefferalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RefferalComponent]
    });
    fixture = TestBed.createComponent(RefferalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
