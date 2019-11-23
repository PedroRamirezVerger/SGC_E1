import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Especialidad } from '../entity/Especialidad';
import Swal from 'sweetalert2';


@Injectable({
    providedIn: 'root'
})

export class EspecialidadService {

    //private URL_ENDPOINT: string = "https://sistemacitasbackend.herokuapp.com/api/citas";
  private URL_ENDPOINT: string = "http://localhost:8080/api/especialidades";  // PARA CUANDO SE DESARROLLA
  private tipo_data: string = '';

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 

  constructor(private httpClient: HttpClient) {

  }

  getAllEspecialidades(): Observable<Especialidad[]>{
    this.tipo_data = '/';
    return this.httpClient.get<Especialidad[]>(this.URL_ENDPOINT + this.tipo_data)
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
    Swal.fire('Error', errorMessage, 'error')
    return throwError(errorMessage);
 }





}
