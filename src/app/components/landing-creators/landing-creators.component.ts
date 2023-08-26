import { Component, ElementRef, ViewChild } from '@angular/core';
import Flickity from 'flickity';

@Component({
  selector: 'app-landing-creators',
  templateUrl: './landing-creators.component.html',
  styleUrls: ['./landing-creators.component.css']
})
export class LandingCreatorsComponent {

  creators: creator[] = [
    {
      creatorLogo: 'logoHerbi.png',
      creatorName: 'HErBiZiDA',
      creatorDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan lobortis massa. Maecenas ultrices sapien nec quam consequat, non elementum odio hendrerit.',
      creatorVideo: 'video.mp4',
      creatorTwitch: 'https://www.twitch.tv/herbizida',
      creatorYoutube: 'https://www.youtube.com/@HErBiZiDA/featured',
      creatorX: 'https://twitter.com/HErBiZiDA_',
    },
    {
      creatorLogo: 'logoHerbi.png',
      creatorName: 'HErBiZiDA',
      creatorDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan lobortis massa. Maecenas ultrices sapien nec quam consequat, non elementum odio hendrerit.',
      creatorVideo: 'video.mp4',
      creatorTwitch: 'https://www.twitch.tv/herbizida',
      creatorYoutube: 'https://www.youtube.com/@HErBiZiDA/featured',
      creatorX: 'https://twitter.com/HErBiZiDA_',
    },
    {
      creatorLogo: 'logoHerbi.png',
      creatorName: 'HErBiZiDA',
      creatorDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan lobortis massa. Maecenas ultrices sapien nec quam consequat, non elementum odio hendrerit.',
      creatorVideo: 'video.mp4',
      creatorTwitch: 'https://www.twitch.tv/herbizida',
      creatorYoutube: 'https://www.youtube.com/@HErBiZiDA/featured',
      creatorX: 'https://twitter.com/HErBiZiDA_',
    },
    {
      creatorLogo: 'logoHerbi.png',
      creatorName: 'HErBiZiDA',
      creatorDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan lobortis massa. Maecenas ultrices sapien nec quam consequat, non elementum odio hendrerit.',
      creatorVideo: 'video.mp4',
      creatorTwitch: 'https://www.twitch.tv/herbizida',
      creatorYoutube: 'https://www.youtube.com/@HErBiZiDA/featured',
      creatorX: 'https://twitter.com/HErBiZiDA_',
    },
    {
      creatorLogo: 'logoHerbi.png',
      creatorName: 'HErBiZiDA',
      creatorDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan lobortis massa. Maecenas ultrices sapien nec quam consequat, non elementum odio hendrerit.',
      creatorVideo: 'video.mp4',
      creatorTwitch: 'https://www.twitch.tv/herbizida',
      creatorYoutube: 'https://www.youtube.com/@HErBiZiDA/featured',
      creatorX: 'https://twitter.com/HErBiZiDA_',
    },
  ];

  @ViewChild('creatorsCarousel') carousel!: ElementRef;
  ngAfterViewInit() {
    new Flickity(
      this.carousel.nativeElement,{
        wrapAround: true,
        autoPlay: 5000,
    });
  }

}

interface creator {
  creatorLogo: string;
  creatorName: string;
  creatorDescription: string;
  creatorVideo: string;
  creatorTwitch: string;
  creatorYoutube: string;
  creatorX: string;
}
