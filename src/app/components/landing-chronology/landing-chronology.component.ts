import { Component, ElementRef, ViewChild } from '@angular/core';
import {dashLeft} from "../../animations/dashLeft";
import {VisibilityComponent} from "../../animations/visibility-component";
import {NavigationService} from "../../services/navigation.service";

@Component({
  selector: 'app-landing-chronology',
  templateUrl: './landing-chronology.component.html',
  styleUrls: ['./landing-chronology.component.css'],
  animations: [dashLeft]
})
export class LandingChronologyComponent extends VisibilityComponent{

    constructor(private navService: NavigationService) {
        super(navService);
    }


  events: event[] = [
    {
      title: '12 de enero,<br/>Año 2949',
      body: 'Un grupo de personas forman AL FILO.',
      image: 'event/event-creation.webp',
    },
    {
      title: '17 de Agosto,<br/>Año 2949',
      body: 'Alcanzamos los 100 miembros.',
      image: 'event/event-100-members.webp',
    },
    {
      title: '7 de Octubre,<br/>Año 2951',
      body: 'Cumplimos 1000 días de vida.',
      image: 'event/event-1000-days.webp',
    },
    {
      title: '5 de Agosto,<br/>Año 2952',
      body: 'Alcanzamos los 500 miembros.',
      image: 'event/event-500-members.webp',
    },
    {
      title: '9 de Agosto,<br/>Año 2952',
      body: 'Asistimos a JumpTown con más de 30 personas.<br/>Una emocionante flota de hammerheads, cazas y cargueros.',
      image: 'event/event-jumptown-1.webp',
    },
    {
      title: '21 de Enero,<br/>Año 2953',
      body: 'Terminamos el DaymarRally, organizado por ATMO Esports (www.atmo.gg).',
      image: 'event/event-rally-1.webp',
    },
    {
      title: '19 de Agosto,<br/>Año 2953',
      body: 'Participamos en el Fight or Flight, organizado por ATMO Esports (www.atmo.gg).',
      image: 'event/event-ff-1.webp',
    },
    {
      title: '24 de Agosto,<br/>Año 2953',
      body: 'Alcanzamos los 600 miembros.',
      image: 'event/event-600-members.webp',
    }
  ];

  @ViewChild('myVideo') videoElement!: ElementRef;

  @ViewChild('carouselChronology') carousel!: ElementRef;
  ngAfterViewInit() {
    Object.assign(this.carousel.nativeElement, {
      grabCursor: true,
      speed: 1000,
      pagination: {
        type: "progressbar",
      },
      navigation: {
      }
    });

    this.carousel.nativeElement.initialize();
  }

}

interface event {
  title: string,
  body: string,
  image: string,
}
