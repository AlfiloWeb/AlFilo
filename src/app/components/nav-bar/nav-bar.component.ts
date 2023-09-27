import {Component, ChangeDetectorRef} from '@angular/core';
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
export class NavBarComponent {

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

  login() {
    var aRerirectUrl = window.location.href;
    window.location.href =
      'https://api.staging.alfilo.org/signIn?aRedirectUrl=' +
      encodeURIComponent(aRerirectUrl);
  }

  getToken() {
    this.http.get('https://api.staging.alfilo.org/token', { withCredentials: true }).subscribe(
      (response: any) => {
        if (response.status === 200) {
          console.log("usuario encontrado")
        }
      },
      (error) => {
        console.log(error);
        if (error.status === 404) {
          // Usuario no encontrado
          alert('Usuario no encontrado. Por favor, inténtalo de nuevo.');
        } else if (error.status === 500) {
          // Error del servidor
          alert('Se produjo un error en el servidor. Por favor, inténtalo más tarde.');
        } else {
          // Otros errores
          alert('Se produjo un error inesperado. Por favor, contacta al soporte técnico.');
        }
      }
    );
  }




}
