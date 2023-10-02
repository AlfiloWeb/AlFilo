import { Component } from '@angular/core';
import {VisibilityComponent} from "../../animations/visibility-component";
import {NavigationService} from "../../services/navigation.service";

@Component({
  selector: 'app-landing-contact-us',
  templateUrl: './landing-contact-us.component.html',
  styleUrls: ['./landing-contact-us.component.css']
})
export class LandingContactUsComponent extends VisibilityComponent{

  referralCodes: string[] = [
    'STAR-G2NP-74KS',
    'STAR-LR5D-V7SA',
  ];

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
    const randomIndex = Math.floor(Math.random() * this.referralCodes.length);
    const randomCode = this.referralCodes[randomIndex];

    window.location.href = `https://robertsspaceindustries.com/enlist?referral=${randomCode}`;
  }
}
