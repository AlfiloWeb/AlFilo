import { Component } from '@angular/core';
import {NavTab} from "../../models/navTab";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

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
  public toggleActive(item: NavTab) {
    this.navItems.forEach((navItem) => {
      navItem.active = false;
    });
    item.active = true;
  }

}
