import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {DiscordService} from "../../services/discord.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.css']
})
export class AuthCallbackComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private discordService: DiscordService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const code = params['code'];

      if (code) {
        this.discordService.getAccessToken(code).subscribe(
          (response: any) => {
            const accessToken = response.access_token;
            this.discordService.getUserProfile(accessToken).subscribe(
              (username: string) => {
                // Aquí puedes utilizar el nombre de usuario obtenido
                this.authService.login(username);
                this.router.navigate(['/']);

              },
              (error: any) => {
                // Manejo de errores
                console.error('Error al obtener el perfil del usuario de Discord: ', error);
              }
            );
          },
          (error: any) => {
            // Manejo de errores
            console.error('Error al obtener el token de acceso de Discord: ', error);
          }
        );
      }
    });
  }
}
