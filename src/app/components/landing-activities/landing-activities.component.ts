import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landing-activities',
  templateUrl: './landing-activities.component.html',
  styleUrls: ['./landing-activities.component.css']
})
export class LandingActivitiesComponent implements AfterViewInit {

  combatSelected: boolean = true;
  transportSelected: boolean = false;
  explorationSelected: boolean = false;
  industrialSelected: boolean = false;
  supportSelected: boolean = false;
  competitionSelected: boolean = false;
  videoSrc: string = '/assets/videos/landing_activities_combat.mp4'

  @ViewChild('myVideo') videoElement!: ElementRef;

  ngAfterViewInit() {

    this.videoElement.nativeElement.muted = true;

  }

  resetActivity(){
    this.combatSelected = false;
    this.transportSelected = false;
    this.explorationSelected = false;
    this.industrialSelected = false;
    this.supportSelected = false;
    this.competitionSelected = false;
  }

  changeActivity(activity: string) {
    this.resetActivity()
    switch(activity) {
      case 'transport': {
        this.transportSelected = true;
        this.videoSrc = '/assets/videos/landing_activities_transport.mp4';
        break;
      }
      case 'exploration': {
        this.explorationSelected = true;
        this.videoSrc = '/assets/videos/landing_activities_exploration.mp4';
        break;
      }
      case 'industrial': {
        this.industrialSelected = true;
        this.videoSrc = '/assets/videos/landing_activities_industrial.mp4';
        break;
      }
      case 'support': {
        this.supportSelected = true;
        this.videoSrc = '/assets/videos/landing_activities_support.mp4';
        break;
      }
      case 'competition': {
        this.competitionSelected = true;
        this.videoSrc = '/assets/videos/landing_activities_competition.mp4';
        break;
      }
      default: {
        this.combatSelected = true;
        this.videoSrc = '/assets/videos/landing_activities_combat.mp4'
        break;
      }
   }
  }
}
