import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Usuario } from '../entity/Usuario';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private URL_ENDPOINT: string = "https://sistemacitasbackend.herokuapp.com/api/usuarios";
  // private URL_ENDPOINT: string = "http://localhost:8080/api/usuarios";  // PARA CUANDO SE DESARROLLA
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
        catchError(this.handleLoginError)
      )
  }


  registrarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>(this.URL_ENDPOINT, JSON.stringify(usuario), this.httpOptions)
      .pipe(
        retry(1),
          catchError(this.handleRegistroError)
      )
  }


  // Error handling 
  handleRegistroError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    Swal.fire('Usuario no registrado', errorMessage, 'error')
    return throwError(errorMessage);
 }

 // Error handling 
 handleLoginError(error) {
  let errorMessage = '';
  if(error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  Swal.fire('Error al iniciar sesión', errorMessage, 'error')
  return throwError(errorMessage);
}
}
