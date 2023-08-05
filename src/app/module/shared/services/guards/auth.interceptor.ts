import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthService } from 'src/app/module/auth/services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.authService.isAuthenticated()) {
      // req = req.clone({
      //   setHeaders: {
      //     Authorization: this.authService.getToken(),
      //   },
      // });
    }

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log('[Intercept error]', error);
        if (error.status === 401) {
          this.authService.logout();
          this.router.navigate(['login'], {
            queryParams: {
              authFailed: true,
            },
          });
        }
        return throwError(error);
      })
    );
  }
}
