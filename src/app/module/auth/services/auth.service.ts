import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, tap, throwError } from 'rxjs';
import { User, newUser } from './../interfaces/auth.interfaces';

@Injectable()
export class AuthService {
  public error$: Subject<string> = new Subject<string>();
  constructor(private http: HttpClient) {}
  private token = null;

  login(user: User): Observable<any> {
    user.returnSecureToken = true;
    return this.http
      .post<any>(`/api/auth/login`, user)
      .pipe(tap(this.setToken), catchError(this.handleError.bind(this)));
  }

  register(user: newUser): Observable<any> {
    user.returnSecureToken = true;
    return this.http.post(`/api/auth/register`, user);
    // .pipe(tap(this.setToken), catchError(this.handleError));
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

  getToken(): any {
    return this.token;
  }

  setToken(token: any) {
    localStorage.setItem('auth-token', token);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  logout() {
    this.setToken(null);
    localStorage.clear();
  }
}
