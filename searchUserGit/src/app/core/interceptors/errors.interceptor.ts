import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorsInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      console.log(error);
      if (error.status == 404) alert('No se ha encontrado la página');
      if (error.status == 500) alert('Error del servidor');
      return throwError(() => error);
    })
  );
};
