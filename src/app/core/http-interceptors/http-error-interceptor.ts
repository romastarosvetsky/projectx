import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorHandlingService } from '../services/error-handling.service';


@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  count = 0;

  constructor(private errorHandlingService: ErrorHandlingService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          const errorMessage = this.getErrorMessage(error);
          this.errorHandlingService.showError(errorMessage);
          return throwError(error);
        }),
      );
  }

  getErrorMessage(error): string {
    return error && error.body && error.body.error || `${error.status} ${error.statusText}`;
  }
}
