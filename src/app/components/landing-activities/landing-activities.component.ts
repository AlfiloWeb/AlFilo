import { Component, AfterViewInit, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-landing-activities',
  templateUrl: './landing-activities.component.html',
  styleUrls: ['./landing-activities.component.css']
})
export class LandingActivitiesComponent implements AfterViewInit {

  combat: string = 'combat';
  transport: string = 'transport';
  exploration: string = 'exploration';
  industrial: string = 'industrial';
  support: string = 'support';
  competition: string = 'competition';

  activities: activity[] = [
    {
      name: this.combat,
      title: 'COMBATE',
      videoSrc: '/assets/videos/activity/'+ this.combat +'.mp4',
      svgSrc: 'assets/images/activity/'+ this.combat +'.svg',
      imageCardSrc: 'activity-card/'+ this.combat +'.png',
      bodyCardSrc: 'Fomentamos el juego en equipo mediante estrategia y táctica.'
    },
    {
      name: this.transport,
      title: 'TRANSPORTE',
      videoSrc: '/assets/videos/activity/'+ this.transport +'.mp4',
      svgSrc: 'assets/images/activity/'+ this.transport +'.svg',
      imageCardSrc: 'activity-card/'+ this.transport +'.png',
      bodyCardSrc: 'Realizamos diversas actividades de mercancía incluyendo contrabando, pirateria y logistica.'
    },
    {
      name: this.exploration,
      title: 'EXPLORACIÓN',
      videoSrc: '/assets/videos/activity/'+ this.exploration +'.mp4',
      svgSrc: 'assets/images/activity/'+ this.exploration +'.svg',
      imageCardSrc: 'activity-card/'+ this.exploration +'.png',
      bodyCardSrc: 'Abarcamos todas las actividades relacionadas con encontrar recursos, ciencia y reconocimiento.'
    },
    {
      name: this.industrial,
      title: 'INDUSTRIA',
      videoSrc: '/assets/videos/activity/'+ this.industrial +'.mp4',
      svgSrc: 'assets/images/activity/'+ this.industrial +'.svg',
      imageCardSrc: 'activity-card/'+ this.industrial +'.png',
      bodyCardSrc: 'Gestión de recursos a todos los niveles de legalidad, procedencia y magnitud.'
    },
    {
      name: this.support,
      title: 'APOYO',
      videoSrc: '/assets/videos/activity/'+ this.support +'.mp4',
      svgSrc: 'assets/images/activity/'+ this.support +'.svg',
      imageCardSrc: 'activity-card/'+ this.support +'.png',
      bodyCardSrc: 'Operaciones de rescate, medicina, reabastecimiento y logistica.'
    },
    {
      name: this.competition,
      title: 'COMPETICIÓN',
      videoSrc: '/assets/videos/activity/'+ this.competition +'.mp4',
      svgSrc: 'assets/images/activity/'+ this.competition +'.svg',
      imageCardSrc: 'activity-card/'+ this.competition +'.png',
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
}

interface activity {
  name: string,
  title: string,
  videoSrc: string,
  svgSrc: string,
  imageCardSrc: string,
  bodyCardSrc: string,
}
