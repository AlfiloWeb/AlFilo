import { Component, ElementRef, ViewChild } from '@angular/core';
import {VisibilityComponent} from "../../animations/visibility-component";
import {NavigationService} from "../../services/navigation.service";

@Component({
  selector: 'app-landing-creators',
  templateUrl: './landing-creators.component.html',
  styleUrls: ['./landing-creators.component.css']
})
export class LandingCreatorsComponent extends VisibilityComponent{

  constructor(private navService: NavigationService) {
    super(navService);
  }

  actualBgImage: string = ''
  creators: creator[] = [
    {
      bgImage: "url('/assets/images/content-creator/fondo-herbizida.webp')",
      logo: 'logo-herbizida.png',
      name: 'HErBiZiDA',
      description: 'Volar desde un caza hasta un ladrillo. La aventura de Star Citizen.',
      twitch: 'https://www.twitch.tv/herbizida',
      youtube: 'https://www.youtube.com/@HErBiZiDA/featured',
      x: 'https://twitter.com/HErBiZiDA_',
    },
    {
      bgImage: "url('/assets/images/content-creator/fondo-senor.webp')",
      logo: 'logo-senor.webp',
      name: 'Senor55',
      description: 'Industria y planificación. La verdad que se esconde trás los números.',
      twitch: 'https://www.twitch.tv/herbizida',
      youtube: 'https://www.youtube.com/@HErBiZiDA/featured',
      x: 'https://twitter.com/HErBiZiDA_',
    },
    {
      bgImage: "url('/assets/images/content-creator/fondo-raylker.webp')",
      logo: 'logo-raylker.webp',
      name: 'Raylker',
      description: 'Lore y juego en compañía. Mi gato necesita una base.',
      twitch: 'https://www.twitch.tv/herbizida',
      youtube: 'https://www.youtube.com/@HErBiZiDA/featured',
      x: 'https://twitter.com/HErBiZiDA_',
    }
  ];

  @ViewChild('creatorsCarousel') carousel!: ElementRef;

  ngAfterViewInit() {
    Object.assign(this.carousel.nativeElement, {
      speed: 1000,
    });

    this.actualBgImage = this.creators[0].bgImage;
    this.carousel.nativeElement.initialize();
    this.carousel.nativeElement.swiper.on('slideChange',  (slide: any) => {
      this.actualBgImage = this.creators[slide.activeIndex].bgImage;
    });
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
