import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-landing-chronology',
  templateUrl: './landing-chronology.component.html',
  styleUrls: ['./landing-chronology.component.css']
})
export class LandingChronologyComponent {
  events: event[] = [
    {
      title: 'Fundación de Al Filo',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan lobortis massa. Maecenas ultrices sapien nec quam consequat, non elementum odio hendrerit.',
      image: 'info_style.png',
      position: 1,
    },
    {
      title: 'Se une Lil Medusa',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan lobortis massa. Maecenas ultrices sapien nec quam consequat, non elementum odio hendrerit.',
      image: 'info_style.png',
      position: 2,
    },
    {
      title: 'Lil Medusa se presenta al cargo de Puto amo',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan lobortis massa. Maecenas ultrices sapien nec quam consequat, non elementum odio hendrerit.',
      image: 'info_style.png',
      position: 3,
    },
    {
      title: 'Se otorga el cargo de Puto amo a Lil Medusa',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan lobortis massa. Maecenas ultrices sapien nec quam consequat, non elementum odio hendrerit.',
      image: 'info_style.png',
      position: 4,
    },
    {
      title: 'Se une Ragh a la organización',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan lobortis massa. Maecenas ultrices sapien nec quam consequat, non elementum odio hendrerit.',
      image: 'info_style.png',
      position: 5,
    },
    {
      title: 'Rah se hace con el liderazgo',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan lobortis massa. Maecenas ultrices sapien nec quam consequat, non elementum odio hendrerit.',
      image: 'info_style.png',
      position: 6,
    },
    {
      title: 'Ragh convierte la organización en una dictadura',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan lobortis massa. Maecenas ultrices sapien nec quam consequat, non elementum odio hendrerit.',
      image: 'info_style.png',
      position: 7,
    },
    {
      title: 'Ragh consquita el sistema Stanton',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan lobortis massa. Maecenas ultrices sapien nec quam consequat, non elementum odio hendrerit.',
      image: 'info_style.png',
      position: 8,
    },
    {
      title: 'Registro no encontrado',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan lobortis massa. Maecenas ultrices sapien nec quam consequat, non elementum odio hendrerit.',
      image: 'info_style.png',
      position: 9,
    },
    {
      title: 'Registro dañado',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan lobortis massa. Maecenas ultrices sapien nec quam consequat, non elementum odio hendrerit.',
      image: 'info_style.png',
      position: 10,
    },
    {
      title: 'Recuperando registro',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan lobortis massa. Maecenas ultrices sapien nec quam consequat, non elementum odio hendrerit.',
      image: 'info_style.png',
      position: 11,
    },
    {
      title: 'Ragh se hace con todas las galaxias',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan lobortis massa. Maecenas ultrices sapien nec quam consequat, non elementum odio hendrerit.',
      image: 'info_style.png',
      position: 12,
    },
  ];
}

interface event {
  title: string,
  body: string,
  image: string,
  position: number,
}
