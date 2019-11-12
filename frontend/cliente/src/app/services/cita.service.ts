import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { RespuestaCitasPaciente } from '../respuesta/respuesta-citas-paciente';
import { Cita } from '../entity/Cita';

@Injectable({
  providedIn: 'root'
})
export class CitaService {


  // private URL_ENDPOINT: string = "https://sistemacitasbackend.herokuapp.com/api/citas";
  private URL_ENDPOINT: string = "http://localhost:8080/api/citas";  // PARA CUANDO SE DESARROLLA
  private tipo_data: string = '';

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  constructor(private httpClient: HttpClient) {

  }


  getCitasUsuario(id: string): Observable<RespuestaCitasPaciente> {
    this.tipo_data = '/' + id;
    return this.httpClient.get<RespuestaCitasPaciente>(this.URL_ENDPOINT + this.tipo_data)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  addCita(cita: Cita): Observable<Cita> {
    return this.httpClient.post<Cita>(this.URL_ENDPOINT, JSON.stringify(cita), this.httpOptions)
      .pipe(
        retry(1),
          catchError(this.handleError)
      )
  }
  deleteCita(id: string): Observable<Cita> {
    this.tipo_data = '/' + id;
    return this.httpClient.delete<Cita>(this.URL_ENDPOINT + this.tipo_data)
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
