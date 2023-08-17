import { Component } from '@angular/core';
import { NavTab } from '../../models/navTab';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpStatusCode,
} from '@angular/common/http';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  textResult: string = '';
  isLogin: boolean = false;
  navItems: NavTab[] = [
    { name: 'Clan', path: '', active: true },
    { name: 'Wiki', path: '/wiki' },
    { name: 'Tienda', path: '/tienda' },
  ];
  loggedIn: boolean = false;

  constructor(private http: HttpClient) {}

  public toggleLoggedIn() {
    this.loggedIn = !this.loggedIn;
    const checkbox = document.getElementById(
      'my-drawer-4'
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

   ngOnInit() {
     this.generateToken();
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
           this.isLogin = true;
         });
     }
   }

   getToken() {
     return localStorage.getItem('alfilo_token');
   }

   removeToken() {
     localStorage.removeItem('alfilo_token');
   }

   logout() {
     let headers = new HttpHeaders({
       Authorization: 'Bearer ' + this.getToken(),
       'Content-Type': 'application/json',
     });
     this.http
       .get<any>('https://api.staging.alfilo.org/singOut', { headers })
       .subscribe((resp) => {
         this.removeToken();
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
       .get<any>('https://api.staging.alfilo.org/' + method, { headers })
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
}
