import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Usuario } from '../entity/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  // private URL_ENDPOINT: string = "https://sistemacitasbackend.herokuapp.com/api/usuarios";
  private URL_ENDPOINT: string = "http://localhost:8080/usuarios";  // PARA CUANDO SE DESARROLLA
  private tipo_data: string = '';

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  



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


  registrarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>(this.URL_ENDPOINT, JSON.stringify(usuario), this.httpOptions)
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
