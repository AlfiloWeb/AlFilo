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
        break;
      }
      case 'exploration': {
        this.explorationSelected = true;
        break;
      }
      case 'industrial': {
        this.industrialSelected = true;
        break;
      }
      case 'support': {
        this.supportSelected = true;
        break;
      }
      case 'competition': {
        this.competitionSelected = true;
        break;
      }
      default: {
        this.combatSelected = true;
        break;
      }
   }
  }
}
