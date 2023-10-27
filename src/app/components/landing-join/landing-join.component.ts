import {Component} from '@angular/core';
import {NavigationService} from "../../services/navigation.service";
import {VisibilityComponent} from "../../animations/visibility-component";

@Component({
  selector: 'app-landing-join',
  templateUrl: './landing-join.component.html',
  styleUrls: ['./landing-join.component.css']
})
export class LandingJoinComponent extends VisibilityComponent{

  constructor(private navService: NavigationService) {
    super(navService);
  }


}
