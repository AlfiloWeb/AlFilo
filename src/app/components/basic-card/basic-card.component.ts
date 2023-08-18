import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-basic-card',
  templateUrl: './basic-card.component.html',
  styleUrls: ['./basic-card.component.css']
})
export class BasicCardComponent {
  @Input() title: string = '';
  @Input() body: string = '';
}
