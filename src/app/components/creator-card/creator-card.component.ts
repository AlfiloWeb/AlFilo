import {Component, ElementRef, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'app-creator-card',
  templateUrl: './creator-card.component.html',
  styleUrls: ['./creator-card.component.css']
})
export class CreatorCardComponent {


  @Input() bgImage: string = '';
  @Input() logo: string = '';
  @Input() name: string = '';
  @Input() description: string = '';
  @Input() twitch: string = '';
  @Input() youtube: string = '';
  @Input() x: string = '';

  @ViewChild('myVideo') videoElement!: ElementRef;
  ngAfterViewInit() {
    this.videoElement.nativeElement.muted = true;
  }

}
