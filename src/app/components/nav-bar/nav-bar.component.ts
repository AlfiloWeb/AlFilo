import {Component, ElementRef, ViewChild} from '@angular/core';
import {NavTab} from '../../models/navTab';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpStatusCode,
} from '@angular/common/http';
import {Subscription} from 'rxjs';
import {NavigationService} from 'src/app/services/navigation.service';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  textResult: string = '';
  isLogin: boolean = false;
  navItems: NavTab[] = [
    {name: 'Clan', path: 'clan'},
    {name: 'Actividades', path: 'actividades'},
    {name: 'Cronología', path: 'cronologia'},
    {name: 'Creadores', path: 'creadores'},
    {name: 'Contacto', path: 'contacto'},
  ];
  loggedIn: boolean = false;
  activeTab!: string;
  subscription!: Subscription;
  loginTitle: string = "Login con Discord";
  currentSectionSelected = 'clan';

  constructor(
    private navigationService: NavigationService,
    private http: HttpClient
  ) {
  }

  updateActiveTab(tab: string) {
    this.activeTab = tab;

    this.navItems.forEach((navItem) => {
      navItem.active = navItem.name === tab;
    });
  }

  ngOnInit() {
    this.generateToken();
    this.subscription = this.navigationService.activeTab$.subscribe(
      (activeTab) => {
        this.updateActiveTab(activeTab);
      }
    );
  }

  login() {
    var aRerirectUrl = window.location.href;
    window.location.href =
      'https://api.staging.alfilo.org/signIn?aRedirectUrl=' +
      encodeURIComponent(aRerirectUrl);
  }

  generateToken() {
    if (localStorage.getItem('alfilo_token') === null) {
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });
      this.http
        .get<any>('https://api.staging.alfilo.org/token', {
          headers,
          withCredentials: true,
        })
        .subscribe((resp) => {
          localStorage.setItem('alfilo_token', resp);
          var tokenDecoded = this.getDecodedAccessToken(resp);
          this.loginTitle = "Bienvenido " + tokenDecoded.unique_name;
          this.isLogin = true;
        });
    } else {
      this.isLogin = true;
    }
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }

  getToken(): string {
    let token = localStorage.getItem('alfilo_token');
    return token === null ? "" : token;
  }

  removeToken() {
    localStorage.removeItem('alfilo_token');
  }

  logout() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.http
      .get<any>('https://api.staging.alfilo.org/signOut', {
        headers,
        withCredentials: true,
      })
      .subscribe((resp) => {
        this.removeToken();
        this.loginTitle = "Login con Discord";
        this.isLogin = false;
      });
  }

  loginTestAlfilo() {
    this.checkHighestRol('loginTestAfiliado');
  }

  loginTestCadete() {
    this.checkHighestRol('loginTestCadete');
  }

  loginTestDaga() {
    this.checkHighestRol('loginTestDaga');
  }

  loginEspada() {
    this.checkHighestRol('loginTestEspada');
  }

  loginAdmin() {
    this.checkHighestRol('loginTestAdmin');
  }

  checkHighestRol(method: string) {
    let headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.getToken(),
      'Content-Type': 'application/json',
    });
    this.http
      .get<any>('https://api.staging.alfilo.org/' + method, {headers})
      .subscribe({
        next: (result) => {
          this.textResult = result;
        },
        error: (error: HttpErrorResponse) => {
          if (error.status !== HttpStatusCode.Forbidden) {
            console.log(error.message);
            return;
          }
          this.textResult = 'Este no es tu rol más alto, prueba con otro';
        },
      });
  }

  actualBgImage: string = ''
  creators: creator[] = [
    {
      bgImage: "url('/assets/images/content-creator/fondo-herbizida.webp')",
      logo: 'logo-herbizida.png',
      name: 'HErBiZiDA',
      description: 'Volar desde un caza hasta un ladrillo. La aventura de Star Citizen.',
      twitch: 'https://www.twitch.tv/herbizida',
      youtube: 'https://www.youtube.com/@HErBiZiDA/featured',
      x: 'https://twitter.com/HErBiZiDA_',
    },
    {
      bgImage: "url('/assets/images/content-creator/fondo-senor.webp')",
      logo: 'logo-senor.webp',
      name: 'Senor55',
      description: 'Industria y planificación. La verdad que se esconde trás los números.',
      twitch: 'https://www.twitch.tv/herbizida',
      youtube: 'https://www.youtube.com/@HErBiZiDA/featured',
      x: 'https://twitter.com/HErBiZiDA_',
    },
    {
      bgImage: "url('/assets/images/content-creator/fondo-raylker.webp')",
      logo: 'logo-raylker.webp',
      name: 'Raylker',
      description: 'Lore y juego en compañía. Mi gato necesita una base.',
      twitch: 'https://www.twitch.tv/herbizida',
      youtube: 'https://www.youtube.com/@HErBiZiDA/featured',
      x: 'https://twitter.com/HErBiZiDA_',
    }
  ];

  @ViewChild('creatorsCarousel') carousel!: ElementRef;

  ngAfterViewInit() {
    Object.assign(this.carousel.nativeElement, {
      speed: 1000,
    });

    this.actualBgImage = this.creators[0].bgImage;
    this.carousel.nativeElement.initialize();
    this.carousel.nativeElement.swiper.on('slideChange',  (slide: any) => {
      this.actualBgImage = this.creators[slide.activeIndex].bgImage;
    });
  }

  goToSlide(index: number){
    this.carousel.nativeElement.swiper.slideTo(index, 500);
  }

  slidePrev(){
    this.carousel.nativeElement.swiper.slidePrev(500);
  }

  slideNext(){
    this.carousel.nativeElement.swiper.slideNext(500);
  }
}

interface creator {
  bgImage: string;
  logo: string;
  name: string;
  description: string;
  twitch: string;
  youtube: string;
  x: string;
}
