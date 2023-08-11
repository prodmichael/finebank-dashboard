import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap, throwError } from 'rxjs';
import { User, newUser } from './../interfaces/auth.interfaces';

@Injectable()
export class AuthService {
  public error$: Subject<string> = new Subject<string>();
  constructor(private http: HttpClient) {}
  private token = null;

  login(user: User): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`/api/auth/login`, user).pipe(
      tap(({ token }) => {
        localStorage.setItem('auth-token', token);
        this.setToken(token);
      })
    );
  }

  register(user: newUser): Observable<newUser> {
    return this.http.post<newUser>(`/api/auth/register`, user);
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
    this.token = token;
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  logout() {
    this.setToken(null);
    localStorage.clear();
  }
}
