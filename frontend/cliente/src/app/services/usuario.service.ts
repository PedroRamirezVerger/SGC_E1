import { Injectable } from '@angular/core';
import { Observable, throwError, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Usuario } from '../entity/Usuario';
import Swal from 'sweetalert2'
import { RespuestLogin } from '../respuesta/respuesta-login';
import { RespuestaUsuariosGestor} from '../respuesta/respuesta-usuarios-gestor';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  //private URL_ENDPOINT: string = "https://sistemacitasbackend.herokuapp.com/api/usuarios";
  private URL_ENDPOINT: string = "http://localhost:8080/api/usuarios";  // PARA CUANDO SE DESARROLLA
  private tipo_data: string = '';

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  constructor(private httpClient: HttpClient) { 

  }
  getAllUsers(): Observable<RespuestaUsuariosGestor>{
    this.tipo_data = '/';
    return this.httpClient.get<RespuestaUsuariosGestor>(this.URL_ENDPOINT + this.tipo_data)
      .pipe(
        retry(1),
        catchError(this.handleLoginError)
      )
  }
  getUsuarioById(id: string): Observable<Usuario> {
    this.tipo_data = '/' + id;
    return this.httpClient.get<Usuario>(this.URL_ENDPOINT + this.tipo_data)
      .pipe(
        retry(1),
          catchError(this.handleError)
      )
  }

  validateLogin(nombre: string, password: string): Observable<RespuestLogin> {
    this.tipo_data = '/' + nombre + '/' + password;
    return this.httpClient.get<RespuestLogin>(this.URL_ENDPOINT + this.tipo_data)
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

  modificarDatosContactoUsuario(id: string, usuario: Usuario): Observable<Usuario> {
    this.tipo_data = '/datosContacto/' + id;
    return this.httpClient.put<Usuario>(this.URL_ENDPOINT + this.tipo_data, JSON.stringify(usuario), this.httpOptions)
      .pipe(
        retry(1),
          catchError(this.handleDatosContactoError)
      )
  }
  
  modificarDatosPersonalesUsuario(id:string, usuario:Usuario): Observable<Usuario> {
    this.tipo_data = '/datospersonales/' + id;
    return this.httpClient.put<Usuario>(this.URL_ENDPOINT + this.tipo_data, JSON.stringify(usuario), this.httpOptions)
      .pipe(
        retry(1),
          catchError(this.handleDatosContactoError)
      )
  }

  modificarPassword(id: string, usuario: Usuario): Observable<Usuario> {
    this.tipo_data = '/'+'password/' + id;
    return this.httpClient.put<Usuario>(this.URL_ENDPOINT + this.tipo_data, JSON.stringify(usuario), this.httpOptions)
      .pipe(
        retry(1),
          catchError(this.handlePasswordError)
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
    Swal.fire('Error', errorMessage, 'error')
    return throwError(errorMessage);
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


  // Error handling 
  handleDatosContactoError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    Swal.fire('Error al cambiar los datos de contacto', errorMessage, 'error')
    return throwError(errorMessage);
   }
   handlePasswordError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    Swal.fire('Error al cambiar el password', errorMessage, 'error')
    return throwError(errorMessage);
   }
}
