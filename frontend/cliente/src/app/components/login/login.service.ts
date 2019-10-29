import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private URL_ENDPOINT: string = "http://localhost:8080/api/usuarios";
  private tipo_data: string = '';

  constructor(private httpClient: HttpClient) {

  }

  validateLogin(nombre: string, password: string): Observable<boolean> {
    this.tipo_data = '/' + nombre + '/' + password
    return this.httpClient.get<boolean>(this.URL_ENDPOINT + this.tipo_data)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }



   // Error handling 
   handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }

}
