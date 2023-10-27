import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {NavigationService} from "../../services/navigation.service";
import {VisibilityComponent} from "../../animations/visibility-component";

@Component({
  selector: 'app-landing-activities',
  templateUrl: './landing-activities.component.html',
  styleUrls: ['./landing-activities.component.css']
})
export class LandingActivitiesComponent extends VisibilityComponent implements AfterViewInit {

    constructor(private navService: NavigationService) {
        super(navService);
    }

  combat: string = 'combat';
  transport: string = 'transport';
  exploration: string = 'exploration';
  industrial: string = 'industrial';
  support: string = 'support';
  competition: string = 'competition';

  referralCodes: string[] = [
    'STAR-G2NP-74KS',
    'STAR-LR5D-V7SA',
  ];

  activities: activity[] = [
    {
      name: this.combat,
      title: 'COMBATE',
      videoSrc: '/assets/videos/activity/'+ this.combat +'Backgroundd.mp4',
      svgSrc: 'assets/images/activity/'+ this.combat +'.svg',
      imageCardSrc: 'activity-card/'+ this.combat +'.webp',
      bodyCardSrc: 'Fomentamos el juego en equipo mediante estrategia y táctica.'
    },
    {
      name: this.transport,
      title: 'TRANSPORTE',
      videoSrc: '/assets/videos/activity/'+ this.transport +'Backgroundd.mp4',
      svgSrc: 'assets/images/activity/'+ this.transport +'.svg',
      imageCardSrc: 'activity-card/'+ this.transport +'.webp',
      bodyCardSrc: 'Realizamos diversas actividades de mercancía incluyendo contrabando, pirateria y logistica.'
    },
    {
      name: this.exploration,
      title: 'EXPLORACIÓN',
      videoSrc: '/assets/videos/activity/'+ this.exploration +'Backgroundd.mp4',
      svgSrc: 'assets/images/activity/'+ this.exploration +'.svg',
      imageCardSrc: 'activity-card/'+ this.exploration +'.webp',
      bodyCardSrc: 'Abarcamos todas las actividades relacionadas con encontrar recursos, ciencia y reconocimiento.'
    },
    {
      name: this.industrial,
      title: 'INDUSTRIA',
      videoSrc: '/assets/videos/activity/'+ this.industrial +'Backgroundd.mp4',
      svgSrc: 'assets/images/activity/'+ this.industrial +'.svg',
      imageCardSrc: 'activity-card/'+ this.industrial +'.webp',
      bodyCardSrc: 'Gestión de recursos a todos los niveles de legalidad, procedencia y magnitud.'
    },
    {
      name: this.support,
      title: 'APOYO',
      videoSrc: '/assets/videos/activity/'+ this.support +'Backgroundd.mp4',
      svgSrc: 'assets/images/activity/'+ this.support +'.svg',
      imageCardSrc: 'activity-card/'+ this.support +'.webp',
      bodyCardSrc: 'Operaciones de rescate, medicina, reabastecimiento y logistica.'
    },
    {
      name: this.competition,
      title: 'COMPETICIÓN',
      videoSrc: '/assets/videos/activity/'+ this.competition +'Backgroundd.mp4',
      svgSrc: 'assets/images/activity/'+ this.competition +'.svg',
      imageCardSrc: 'activity-card/'+ this.competition +'.webp',
      bodyCardSrc: 'Participamos de forma activa con la comunidad en diferentes eventos y torneos.'
    },
  ];
  currentActivitiy: activity = this.activities[0];

  @ViewChild('myVideo') videoElement!: ElementRef;
  ngAfterViewInit() {
    this.videoElement.nativeElement.muted = true;
  }

  changeCurrentActivity(activityName: string) {
    let activityFinded = this.activities.find((activity) => activity.name === activityName);
    if (activityFinded !== undefined) {
      this.currentActivitiy = activityFinded;
    }
  }

  isCurrentActivity(activityName: string): boolean {
    return this.currentActivitiy.name === activityName;
  }


  redirectWithReferral() {
    const randomIndex = Math.floor(Math.random() * this.referralCodes.length);
    const randomCode = this.referralCodes[randomIndex];

    window.location.href = `https://robertsspaceindustries.com/enlist?referral=${randomCode}`;
  }

}

interface activity {
  name: string,
  title: string,
  videoSrc: string,
  svgSrc: string,
  imageCardSrc: string,
  bodyCardSrc: string,
}
