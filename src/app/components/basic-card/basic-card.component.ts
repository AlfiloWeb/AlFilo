import { Component, Input } from '@angular/core';
import {fadeIn} from "../../animations/fadeIn";
import {AnimatedComponent} from "../../animations/animated-component";

@Component({
  selector: 'app-basic-card',
  templateUrl: './basic-card.component.html',
  styleUrls: ['./basic-card.component.css'],
  animations: [fadeIn]
})
export class BasicCardComponent extends AnimatedComponent{
  @Input() title: string = '';
  @Input() body: string = '';
  @Input() srcImage: string = '';
  
}
