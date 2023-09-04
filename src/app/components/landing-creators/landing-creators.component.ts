import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landing-creators',
  templateUrl: './landing-creators.component.html',
  styleUrls: ['./landing-creators.component.css']
})
export class LandingCreatorsComponent {
  creators: creator[] = [
    {
      bgImage: "xxs:bg-[url('/assets/images/content-creator/fondo-herbizida.webp')]",
      logo: 'logo-herbizida.png',
      name: 'HErBiZiDA',
      description: 'Streamer de Twich con más de 9200 horas de juego emitidas. Cuenta con una gran experiencia de vuelo, combate y amplios conocimientos de las mecánicas sobre Star Citizen, configuraciones de naves y perifericos.<br/>Sigue el desarrollo de Star Citizen muy de cerca emitiendo en directo todos los this week, ISC y SC Live.<br/>Si quieres conocer el proyecto y recibir los mejores consejors, es el tipo indicado.',
      twitch: 'https://www.twitch.tv/herbizida',
      youtube: 'https://www.youtube.com/@HErBiZiDA/featured',
      x: 'https://twitter.com/HErBiZiDA_',
    },
    {
      bgImage: "xxs:bg-[url('/assets/images/content-creator/fondo-senor.webp')]",
      logo: 'logo-senor.webp',
      name: 'Senor55',
      description: 'En temas industriales no tiene rival. Cuenta con una gran experiencia de vuelo, combate y amplios conocimientos de las mecánicas sobre Star Citizen, configuraciones de naves y perifericos.<br/>Sigue el desarrollo de Star Citizen muy de cerca emitiendo en directo todos los this week, ISC y SC Live.<br/>Si quieres conocer el proyecto y recibir los mejores consejors, es el tipo indicado.',
      twitch: 'https://www.twitch.tv/herbizida',
      youtube: 'https://www.youtube.com/@HErBiZiDA/featured',
      x: 'https://twitter.com/HErBiZiDA_',
    },
    {
      bgImage: "xxs:bg-[url('/assets/images/content-creator/fondo-raylker.webp')]",
      logo: 'logo-raylker.webp',
      name: 'Raylker',
      description: 'La voz del verso. Cuenta con una gran experiencia de vuelo, combate y amplios conocimientos de las mecánicas sobre Star Citizen, configuraciones de naves y perifericos.<br/>Sigue el desarrollo de Star Citizen muy de cerca emitiendo en directo todos los this week, ISC y SC Live.<br/>Si quieres conocer el proyecto y recibir los mejores consejors, es el tipo indicado.',
      twitch: 'https://www.twitch.tv/herbizida',
      youtube: 'https://www.youtube.com/@HErBiZiDA/featured',
      x: 'https://twitter.com/HErBiZiDA_',
    }
  ];

  @ViewChild('creatorsCarousel') carousel!: ElementRef;
  ngAfterViewInit() {
    Object.assign(this.carousel.nativeElement, {
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 5000,
      },
    });
    this.carousel.nativeElement.initialize();
  }

  goToSlide(index: number){
    this.carousel.nativeElement.swiper.slideTo(index, 500);
  }

  slidePrev(){
    this.carousel.nativeElement.swiper.slidePrev(500);
  }

  slideNext(){
    this.carousel.nativeElement.swiper.slideNext(500);
  }
}

interface creator {
  bgImage: string;
  logo: string;
  name: string;
  description: string;
  twitch: string;
  youtube: string;
  x: string;
}
