import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PedircitaService {

  //private URL_ENDPOINT: string = "https://sistemacitasbackend.herokuapp.com/api/usuarios"; 
  private URL_ENDPOINT: string = "http://localhost:8080/api/usuarios"; //PARA CUANDO SE DESARROLLA
  private tipo_data: string = '';

  constructor(private httpClient: HttpClient) { }
}
