import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/entity/Usuario';
import { RegistroService } from './registro.service';
import { isNumber } from 'util';

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

  validarletradni(letra:string){
    var abecedario="abcdefghyjklmnñopqrstuvwxyz";
    letra = letra.toLowerCase();
   for(var i=0; i<letra.length; i++){
      if (abecedario.indexOf(letra.charAt(i),0)!=-1){
         return true;
      }
   }
   return false;
  }
  validardni(dni:string) {
    var numero=dni.substring(0,dni.length-1);
    var letra=dni.charAt(dni.length-1);
    
    if(dni.length != 9 || !isNumber(numero) || this.validarletradni(letra)){
      this.msg = 'Introduce el dni de manera correcta.'
      return false;
    }
    return true;
  }
  validartelefono(telefono:string){
    if( telefono.length!= 9 || !isNumber(telefono)){
      this.msg = 'Introduce el telefono de manera correcta.'
      return false;
    }
    return true;
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

    if(nombre.length == 0|| apellidos.length == 0 || this.validardni(dni) || password.length == 0 || this.validartelefono(telefono) 
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
