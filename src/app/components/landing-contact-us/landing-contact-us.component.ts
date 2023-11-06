import { Component } from '@angular/core';
import {VisibilityComponent} from "../../animations/visibility-component";
import {NavigationService} from "../../services/navigation.service";
import {referralCodes} from "../../models/referralCodes";

@Component({
  selector: 'app-landing-contact-us',
  templateUrl: './landing-contact-us.component.html',
  styleUrls: ['./landing-contact-us.component.css']
})
export class LandingContactUsComponent extends VisibilityComponent{


  constructor(private navService: NavigationService) {
    super(navService);
  }

  services: string[] = [
    'Escolta',
    'Rescate',
    'Cazarecompensas',
    'Inteligencia',
    'Suministros',
  ];

  redirectWithReferral() {
    const randomIndex = Math.floor(Math.random() * referralCodes.length);
    const randomCode = referralCodes[randomIndex].code;

    window.location.href = `https://robertsspaceindustries.com/enlist?referral=${randomCode}`;
  }
}
