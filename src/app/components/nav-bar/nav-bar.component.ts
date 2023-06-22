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

  public toggleActive(item: NavTab) {
    this.navItems.forEach((navItem) => {
      navItem.active = false;
    });
    item.active = true;
  }

}
