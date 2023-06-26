import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usernameKey = 'username';

  constructor() { }

  login(username: string): void {
    localStorage.setItem(this.usernameKey, username);
  }

  logout(): void {
    localStorage.removeItem(this.usernameKey);
  }

  getUsername(): string | null {
    return localStorage.getItem(this.usernameKey);
  }
}
