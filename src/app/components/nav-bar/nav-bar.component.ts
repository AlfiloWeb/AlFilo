import {Component, ChangeDetectorRef, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
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
export class NavBarComponent implements AfterViewInit{

  @ViewChild('signUpModal') signUpModal!: ElementRef;

  boolLogin: boolean = false;

  signUpModalText = "";
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

  openModal() {
    const modal = this.signUpModal.nativeElement as HTMLDialogElement;
    modal.showModal();
  }

  ngAfterViewInit() {
    this.openModal();
  }

  ngOnInit() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    this.boolLogin = isLoggedIn === 'true';

    if (isLoggedIn) {
      this.getToken();

    }



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
      'https://api.staging.alfilo.org/auth/signIn?redirectUrl=' +
      encodeURIComponent(aRerirectUrl);
    localStorage.setItem('isLoggedIn', 'true');
    this.boolLogin = true;
  }

  logout() {
    this.http.get('https://api.staging.alfilo.org/auth/signOut', {withCredentials: true}).subscribe({
      next: (response: any) => {
        if (response.status === 200) {
          // Éxito: El servidor respondió con un código 200.
          alert('Cierre de sesión exitoso.');
        }
      },
      error: (error) => {
        console.log(error);
        if (error.status === 500) {
          // Error 500: Server Error
          alert('Error en el servidor: Server Error');
        } else {
          // Otros errores
          alert('Error inesperado.');
        }

      }
    });
    localStorage.removeItem('isLoggedIn');
    this.boolLogin = false;
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }

  // Función para realizar la solicitud PUT a signIn
  signUp() {
    const requestBody = { /* Aquí coloca los datos que deseas enviar en el cuerpo de la solicitud PUT */ };

    this.http.put('https://api.staging.alfilo.org/auth/signUp', requestBody, { withCredentials: true }).subscribe({
      next: (response: any) => {
        if (response.status === 200) {
          console.log('Cuenta creada correctamente. Por favor, inicia sesión.');
          this.getToken();
        }
      },
      error: (error) => {
        console.log(error);
        if (error.status === 400) {
          // Error 400: Bad Request
          console.log('Error en la solicitud: Bad Request, cuenta ya creada');
        } else if (error.status === 500) {
          // Error 500: Server Error
          console.log('Se produjo un error en el servidor. Por favor, inténtalo más tarde.');
        } else {
          console.log('Se produjo un error inesperado. Por favor, contacta al soporte técnico.');
        }
      }
    });
  }
  getToken() {
    this.http.get('https://api.staging.alfilo.org/auth/token', { withCredentials: true }).subscribe({
      next: (response: any) => {
          // Guarda el token en el localStorage
          console.log(response);
          localStorage.setItem('accessToken', response.AccessToken);
          localStorage.setItem('refreshToken', response.RefreshToken);
      },
      error: (error) => {
        console.log(error);
        if (error.status === 404) {
          this.signUpModalText = "No se encontró el usuario. Por favor, regístrate.";
          localStorage.removeItem('isLoggedIn');
          this.boolLogin = false;
          this.openModal();
        } else if (error.status === 500) {
          console.log('Se produjo un error en el servidor. Por favor, inténtalo más tarde.');
          localStorage.removeItem('isLoggedIn');
          this.boolLogin = false;
        } else {
          console.log('Se produjo un error inesperado. Por favor, contacta al soporte técnico.');
          localStorage.removeItem('isLoggedIn');
          this.boolLogin = false;
        }
      }
    });
  }
}
