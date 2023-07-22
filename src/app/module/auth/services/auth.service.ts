import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './../interfaces/auth.interfaces';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  get token(): string {
    return '';
  }

  login(user: User) {
    this.http.post('', user);
  }

  signUp() {}

  logout() {}

  isAuthenticated(): boolean {
    return !!this.token;
  }

  private setToken() {}
}
