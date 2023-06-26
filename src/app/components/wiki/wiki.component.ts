import { Component } from '@angular/core';
import {NavigationService} from "../../services/navigation.service";

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent {

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    this.navigationService.setActiveTab('Wiki');
  }

}
