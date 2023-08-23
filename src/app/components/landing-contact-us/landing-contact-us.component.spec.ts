import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingContactUsComponent } from './landing-contact-us.component';

describe('LandingContactUsComponent', () => {
  let component: LandingContactUsComponent;
  let fixture: ComponentFixture<LandingContactUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingContactUsComponent]
    });
    fixture = TestBed.createComponent(LandingContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
