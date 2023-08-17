import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingJoinComponent } from './landing-join.component';

describe('LandingJoinComponent', () => {
  let component: LandingJoinComponent;
  let fixture: ComponentFixture<LandingJoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingJoinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
