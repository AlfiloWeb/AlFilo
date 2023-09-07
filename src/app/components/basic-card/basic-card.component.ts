import { Component, Input } from '@angular/core';
import {fadeIn} from "../../animations/fadeIn";
import {VisibilityComponent} from "../../animations/visibility-component";
import {NavigationService} from "../../services/navigation.service";

@Component({
  selector: 'app-basic-card',
  templateUrl: './basic-card.component.html',
  styleUrls: ['./basic-card.component.css'],
  animations: [fadeIn]
})
export class BasicCardComponent extends VisibilityComponent{
  @Input() title: string = '';
  @Input() body: string = '';
  @Input() srcImage: string = '';

  constructor(private navService: NavigationService) {
    super(navService);
  }

}
