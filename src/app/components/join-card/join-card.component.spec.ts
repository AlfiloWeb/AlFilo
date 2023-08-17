import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinCardComponent } from './join-card.component';

describe('JoinCardComponent', () => {
  let component: JoinCardComponent;
  let fixture: ComponentFixture<JoinCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
