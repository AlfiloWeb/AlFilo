import {Component, ChangeDetectorRef, ViewChild, ElementRef, OnInit} from '@angular/core';
import {NavTab} from '../../models/navTab';
import {
  HttpClient
} from '@angular/common/http';
import {Subscription} from 'rxjs';
import {NavigationService} from 'src/app/services/navigation.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements  OnInit{

  @ViewChild('signUpModal') signUpModal!: ElementRef;

  boolLogin: boolean = false;

  signUpModalText: string = "";
  activeTab!: string;
  subscription!: Subscription;

  navItems: NavTab[] = [
    {name: 'Clan', path: 'clan'},
    {name: 'Actividades', path: 'actividades'},
    {name: 'Cronología', path: 'cronologia'},
    {name: 'Creadores', path: 'creadores'},
    {name: 'Contacto', path: 'contacto'},
  ];

  constructor(
    private navigationService: NavigationService,
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.subscription = this.navigationService.activeTab$.subscribe(
      (activeTab) => {
        this.updateActiveTab(activeTab);
        this.cdr.detectChanges();
      }
    );
  }


  updateActiveTab(tab: string) {
    this.activeTab = tab;

    this.navItems.forEach((navItem) => {
      navItem.active = navItem.name === tab;
    });
  }

}
