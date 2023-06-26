import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DiscordService {
  //TODO se esta exponiendo el client secret en el front end, hacerlo en el back end
  private discordTokenUrl = 'https://discord.com/api/oauth2/token';
  private discordApiUrl = 'https://discord.com/api';
  private clientId = '1122911967934414971';
  private clientSecret = 'CkzpHKh3s8WnT8k3F3cjiVnmS60oZvAX';
  private redirectUri = 'http://localhost:4200/auth/callback';

  constructor(private http: HttpClient) {}

  getAccessToken(code: string): Observable<any> {
    const body = new URLSearchParams();
    body.set('client_id', this.clientId);
    body.set('client_secret', this.clientSecret);
    body.set('grant_type', 'authorization_code');
    body.set('code', code);
    body.set('redirect_uri', this.redirectUri);

    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );

    return this.http.post(this.discordTokenUrl, body.toString(), { headers });
  }

  getUserProfile(accessToken: string): Observable<string> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${accessToken}`
    );

    return this.http
      .get(`${this.discordApiUrl}/users/@me`, { headers })
      .pipe(
        map((user: any) => {
          // TODO: Aquí puedes obtener más datos del usuario según tus necesidades
          return user.username;
        })
      );
  }
}
