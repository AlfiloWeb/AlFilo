import {Component, ChangeDetectorRef, ViewChild, ElementRef} from '@angular/core';
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

  @ViewChild('signUpModal') signUpModal!: ElementRef;

  printLogin: boolean = false;
  printAccesToken: string = "no";
  printRefreshToken: string = "no";

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


  ngOnInit() {
    // const isLoggedIn = localStorage.getItem('isLoggedIn');
    // this.printLogin = isLoggedIn === 'true';

    // if (isLoggedIn) {
    //   this.getToken();
    // }

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
    localStorage.setItem('isLoggedIn', 'true');
    this.printLogin = true;
  }

  logout() {
    this.http.get('https://api.staging.alfilo.org/signOut', {withCredentials: true}).subscribe({
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
    this.printLogin = false;
    localStorage.removeItem('accessToken');
    this.printAccesToken = "no";
    localStorage.removeItem('refreshToken');
    this.printRefreshToken = "no";
  }

  // Función para realizar la solicitud PUT a signIn
  signUp() {
    const requestBody = { /* Aquí coloca los datos que deseas enviar en el cuerpo de la solicitud PUT */ };

    this.http.put('https://api.staging.alfilo.org/signUp', requestBody, { withCredentials: true }).subscribe({
      next: (response: any) => {
        if (response.status === 200) {
          // Éxito: El servidor respondió con un código 200.
          alert('Cuenta creada correctamente. Por favor, inicia sesión.');
        }
      },
      error: (error) => {
        console.log(error);
        if (error.status === 400) {
          // Error 400: Bad Request
          alert('Error en la solicitud: Bad Request');
        } else if (error.status === 500) {
          // Error 500: Server Error
          alert('Error en el servidor: Server Error');
        } else {
          // Otros errores
          alert('Error inesperado.');
        }
      }
    });
  }
  getToken() {
    this.http.get('https://api.staging.alfilo.org/token', { withCredentials: true }).subscribe({
      next: (response: any) => {
          // Guarda el token en el localStorage
          console.log(response);
          localStorage.setItem('accessToken', response.AccessToken);
          this.printAccesToken = response.AccessToken;
          localStorage.setItem('refreshToken', response.RefreshToken);
          this.printRefreshToken = response.RefreshToken;
          alert('Token obtenido correctamente.' + response.AccessToken + ' ' + response.RefreshToken);

      },
      error: (error) => {
        console.log(error);
        if (error.status === 404) {
          this.signUpModalText = "No se encontró el usuario. Por favor, regístrate.";
          this.openModal();
        } else if (error.status === 500) {
          alert('Se produjo un error en el servidor. Por favor, inténtalo más tarde.');
        } else {
          alert('Se produjo un error inesperado. Por favor, contacta al soporte técnico.');
        }
      }
    });
  }
}
