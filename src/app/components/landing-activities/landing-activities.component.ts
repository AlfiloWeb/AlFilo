import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landing-activities',
  templateUrl: './landing-activities.component.html',
  styleUrls: ['./landing-activities.component.css']
})
export class LandingActivitiesComponent implements AfterViewInit {

  @ViewChild('myVideo') videoElement!: ElementRef;

  ngAfterViewInit() {

    this.videoElement.nativeElement.muted = true;

  }
}
