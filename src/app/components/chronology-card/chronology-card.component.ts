import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-chronology-card',
  templateUrl: './chronology-card.component.html',
  styleUrls: ['./chronology-card.component.css']
})
export class ChronologyCardComponent {
  @Input() title: string = '';
  @Input() body: string = '';
  @Input() srcImage: string = '';
  @Input({ transform: booleanAttribute }) left: boolean = false;
}
