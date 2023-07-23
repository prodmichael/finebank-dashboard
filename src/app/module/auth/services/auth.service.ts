import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environments';
import { User } from './../interfaces/auth.interfaces';

@Injectable()
export class AuthService {
  public error$: Subject<string> = new Subject<string>();
  constructor(private http: HttpClient) {}

  get token(): any {
    const expDateStr = localStorage.getItem('fb-token-exp');
    const expDate = expDateStr ? new Date(expDateStr) : null;
    if (expDate && new Date() > expDate) {
      this.logout();
    }
    return localStorage.getItem('fb-token');
  }

  login(user: User): Observable<any> {
    user.returnSecureToken = true;
    return this.http
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`,
        user
      )
      .pipe(tap(this.setToken), catchError(this.handleError));
  }

  signUp() {}

  logout() {
    this.setToken(null);
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    const { message } = error.error.error;
    switch (message) {
      case 'INVALID_EMAIL':
        this.error$.next('Incorrect email');
        break;
      case 'INVALID_PASSWORD':
        this.error$.next('Incorrect password');
        break;
      case 'EMAIL_NOT_FOUND':
        this.error$.next('Email not found');
        break;
    }
    return throwError(error);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  private setToken(response: any | null) {
    if (response) {
      const expDate = new Date(
        new Date().getTime() + +response.expiresIn * 1000
      );
      localStorage.setItem('fb-token', response.idToken);
      localStorage.setItem('fb-token-exp', expDate.toString());
    } else {
      localStorage.clear();
    }
  }
}
