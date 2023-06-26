import { Component } from '@angular/core';
import {NavigationService} from "../../services/navigation.service";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent {

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
      this.navigationService.setActiveTab('Clan');
  }

  array = Array.from({length: 100}, (_, i) => i + 1);

}
