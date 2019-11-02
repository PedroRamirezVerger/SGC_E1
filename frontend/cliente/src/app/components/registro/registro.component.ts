import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/entity/Usuario';
import { RegistroService } from './registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  msg: string = ''
  usuario: Usuario = new Usuario;
  constructor(private router:Router,
              private registroService: RegistroService) {

   }

  ngOnInit() {
  }

  singUp(nombre: string, apellidos: string, dni:string, password: string, telefono: string, email: string, sexo: string, fechaNacimiento: Date, tipo: string){
    console.log(nombre);
    this.usuario.nombre = nombre;
    this.usuario.apellidos = apellidos;
    this.usuario.dni = dni;
    this.usuario.password = password;
    this.usuario.telefono = telefono;
    this.usuario.email = email;
    this.usuario.sexo = sexo;
    this.usuario.fechaNacimiento = fechaNacimiento;
    this.usuario.tipo = "usuario";
    console.log(this.usuario);

    if(nombre.length == 0|| apellidos.length == 0 || dni.length == 0 || password.length == 0 || telefono.length == 0 
      || email.length == 0 || sexo.length == 0 || fechaNacimiento == null || tipo.length == 0) {
      this.msg = 'Tienes que rellenar todos los campos.'
   }
   else{
    this.registroService.registrarUsuario(this.usuario).subscribe(
      response => {
        this.router.navigate(['/login'])
      }
    );
   }
    
    

  }

}
