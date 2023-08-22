import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgDiscordComponent } from './svg-discord.component';

describe('SvgDiscordComponent', () => {
  let component: SvgDiscordComponent;
  let fixture: ComponentFixture<SvgDiscordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SvgDiscordComponent]
    });
    fixture = TestBed.createComponent(SvgDiscordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
