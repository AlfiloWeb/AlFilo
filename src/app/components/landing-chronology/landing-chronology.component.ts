import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landing-chronology',
  templateUrl: './landing-chronology.component.html',
  styleUrls: ['./landing-chronology.component.css']
})
export class LandingChronologyComponent {
  events: event[] = [
    {
      title: '12 de enero,<br/>Año 2949',
      body: 'Un grupo de personas forman AL FILO.',
      image: 'event/event-creation.png',
    },
    {
      title: '17 de Agosto,<br/>Año 2949',
      body: 'Alcanzamos los 100 miembros.',
      image: 'event/event-100-members.png',
    },
    {
      title: '7 de Octubre,<br/>Año 2951',
      body: 'Cumplimos 1000 días de vida.',
      image: 'event/event-1000-days.png',
    },
    {
      title: '5 de Agosto,<br/>Año 2952',
      body: 'Alcanzamos los 500 miembros.',
      image: 'event/event-500-members.png',
    },
    {
      title: '9 de Agosto,<br/>Año 2952',
      body: 'Asistimos a JumpTown con más de 30 personas.<br/>Una emocionante flota de hammerheads, cazas y cargueros.',
      image: 'event/event-jumptown-1.png',
    },
    {
      title: '21 de Enero,<br/>Año 2953',
      body: 'Terminamos el DaymarRally, organizado por ATMO Esports (www.atmo.gg).',
      image: 'event/event-rally-1.png',
    },
    {
      title: '19 de Agosto,<br/>Año 2953',
      body: 'Participamos en el Fight or Flight, organizado por ATMO Esports (www.atmo.gg).',
      image: 'event/event-ff-1.png',
    },
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
