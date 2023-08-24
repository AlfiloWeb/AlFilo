import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-landing-chronology',
  templateUrl: './landing-chronology.component.html',
  styleUrls: ['./landing-chronology.component.css']
})
export class LandingChronologyComponent {
  events: event[] = [
    {
      title: '12 de enero, Año 2949',
      body: 'Un grupo de personas forman AL FILO.',
      image: 'event-creation.png',
      position: 1,
    },
    {
      title: '17 de Agosto, Año 2949',
      body: 'Alcanzamos los 100 miembros.',
      image: 'event-100-members.png',
      position: 2,
    },
    {
      title: '7 de Octubre, Año 2951',
      body: 'Cumplimos 1000 días de vida.',
      image: 'logo-400-miembros.png',
      position: 3,
    },
    {
      title: '5 de Agosto, Año 2952',
      body: 'Alcanzamos los 500 miembros.',
      image: 'event-500-members.png',
      position: 4,
    },
    {
      title: '9 de Agosto, Año 2952',
      body: 'Asistimos a JumpTown con más de 30 personas. Una emocionante flota de hammerheads, cazas y cargueros.',
      image: 'event-jumptown-1.png',
      position: 5,
    },
    {
      title: '21 de Enero, Año 2953',
      body: 'Terminamos el DaymarRally, organizado por ATMO Esports (www.atmo.gg).',
      image: 'event-rally-1.png',
      position: 6,
    },
    {
      title: '19 de Agosto, Año 2953',
      body: 'Participamos en el Fight or Flight, organizado por ATMO Esports (www.atmo.gg).',
      image: 'event-ff-1.png',
      position: 7,
    },
  ];
}

interface event {
  title: string,
  body: string,
  image: string,
  position: number,
}
