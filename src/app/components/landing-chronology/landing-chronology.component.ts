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
      side: 'left',
    },
    {
      title: 'Se une Lil Medusa',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan lobortis massa. Maecenas ultrices sapien nec quam consequat, non elementum odio hendrerit.',
      image: 'info_style.png',
      position: 2,
      side: 'right',
    },
    {
      title: 'Lil Medusa se presenta al cargo de Puto amo',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan lobortis massa. Maecenas ultrices sapien nec quam consequat, non elementum odio hendrerit.',
      image: 'info_style.png',
      position: 3,
      side: 'left',
    },
    {
      title: 'Se otorga el cargo de Puto amo a Lil Medusa',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan lobortis massa. Maecenas ultrices sapien nec quam consequat, non elementum odio hendrerit.',
      image: 'info_style.png',
      position: 4,
      side: 'right',
    },
    {
      title: 'Fundación de Al Filo',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan lobortis massa. Maecenas ultrices sapien nec quam consequat, non elementum odio hendrerit.',
      image: 'info_style.png',
      position: 5,
      side: 'left',
    },
    {
      title: 'Se une Lil Medusa',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan lobortis massa. Maecenas ultrices sapien nec quam consequat, non elementum odio hendrerit.',
      image: 'info_style.png',
      position: 6,
      side: 'right',
    },
    {
      title: 'Lil Medusa se presenta al cargo de Puto amo',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan lobortis massa. Maecenas ultrices sapien nec quam consequat, non elementum odio hendrerit.',
      image: 'info_style.png',
      position: 7,
      side: 'left',
    },
    {
      title: 'Se otorga el cargo de Puto amo a Lil Medusa',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan lobortis massa. Maecenas ultrices sapien nec quam consequat, non elementum odio hendrerit.',
      image: 'info_style.png',
      position: 8,
      side: 'right',
    },
    {
      title: 'Fundación de Al Filo',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan lobortis massa. Maecenas ultrices sapien nec quam consequat, non elementum odio hendrerit.',
      image: 'info_style.png',
      position: 9,
      side: 'left',
    },
    {
      title: 'Se une Lil Medusa',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan lobortis massa. Maecenas ultrices sapien nec quam consequat, non elementum odio hendrerit.',
      image: 'info_style.png',
      position: 10,
      side: 'right',
    },
    {
      title: 'Lil Medusa se presenta al cargo de Puto amo',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan lobortis massa. Maecenas ultrices sapien nec quam consequat, non elementum odio hendrerit.',
      image: 'info_style.png',
      position: 11,
      side: 'left',
    },
    {
      title: 'Se otorga el cargo de Puto amo a Lil Medusa',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan lobortis massa. Maecenas ultrices sapien nec quam consequat, non elementum odio hendrerit.',
      image: 'info_style.png',
      position: 12,
      side: 'right',
    },
  ];
}

interface event {
  title: string,
  body: string,
  image: string,
  position: number,
  side: string,
}
