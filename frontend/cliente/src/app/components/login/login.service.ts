import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private URL_ENDPOINT: string = "https://sistemacitasbackend.herokuapp.com/api/usuarios";
  private tipo_data: string = '';

  constructor(private httpClient: HttpClient) {

  }

  validateLogin(nombre: string, password: string): Observable<boolean> {
    this.tipo_data = nombre + '/' + password
    return this.httpClient.get<boolean>(this.URL_ENDPOINT + this.tipo_data);
  }

}
