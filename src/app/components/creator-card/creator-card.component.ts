import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-creator-card',
  templateUrl: './creator-card.component.html',
  styleUrls: ['./creator-card.component.css']
})
export class CreatorCardComponent {

  @Input() creatorLogo: string = '';
  @Input() creatorName: string = '';
  @Input() creatorDescription: string = '';
  @Input() creatorVideo: string = '';
  @Input() creatorTwitch: string = '';
  @Input() creatorYoutube: string = '';
  @Input() creatorX: string = '';

}
