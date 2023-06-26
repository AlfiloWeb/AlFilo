import { Component} from '@angular/core';
import {NavigationService} from "../../services/navigation.service";
import {Subscription} from "rxjs";

import {NavTab} from "../../models/navTab";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent {
  activeTab!: string;
  subscription!: Subscription;

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    this.subscription = this.navigationService.activeTab$.subscribe( activeTab => {
        this.updateActiveTab(activeTab);
      }
    );
  }

  navItems: NavTab[] = [
    {name: 'Clan', path: '', active: true},
    {name: 'Wiki', path: '/wiki'},
    {name: 'Tienda', path: '/tienda'}];

  loggedIn: boolean = false;

  public toggleLoggedIn() {
    this.loggedIn = !this.loggedIn;
    const checkbox = document.getElementById(
      'my-drawer-4',
    ) as HTMLInputElement | null;

    if (checkbox != null && checkbox.checked) {
      checkbox.checked = false;
    }

  }

  updateActiveTab(tab: string) {
    this.activeTab = tab;

    this.navItems.forEach((navItem) => {
      navItem.active = navItem.name === tab;
    }
    );

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
