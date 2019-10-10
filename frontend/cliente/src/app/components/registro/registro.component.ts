import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private router:Router) {

   }

  ngOnInit() {
  }

  singIn(dni:number, password: string, Nombre: string, Apellidos: string, Email: string, Telefono: number, FechaNacimiento: Date, Sexo: string){
    //rellenar con la forma adecuada para registrar los datos en la bbdd
  }

}
