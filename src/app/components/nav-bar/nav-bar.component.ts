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

  loginWithDiscord() {
    const clientId = '1122911967934414971';
    const redirectUri = encodeURIComponent('http://localhost:4200/auth/callback');
    const scopes = encodeURIComponent('identify email');
    window.location.href = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scopes}`;
  }



  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
