  
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/entity/Usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: Usuario = new Usuario;
  constructor(private router:Router,
              private usuarioService: UsuarioService) {

   }

  ngOnInit() {
  }

  validardni(dni:string) {
    var numero=parseInt(dni);
    if(dni.length != 9 || String(numero).length + 1 != dni.length){
      alert('El dni tiene que tener 8 números y 1 letra.')
      return false;
    }
    
    return true;
  }
  validartelefono(telefono:string){
    var comprobacion=parseInt(telefono);
    if( telefono.length!= 9 || String(comprobacion).length != 9){
      alert('Introduce el telefono de manera correcta.')
      return false;
    }
    return true;
  }
  comprobarpassword(password:string){
    if(password.length<7){
      alert('La contraseña tiene que tener una longitud mayor de 7.')
      return false;
    }
    var numeros=parseInt(password);
    if(String(numeros).length < 2){
     alert("La contraseña tiene que tener al menos 2 numeros.")
     return false;
    }
    var comprobacionnumeros='123456789';
    var tienenumeros=false;
    for(var i=0;i<comprobacionnumeros.length;i++){
      if(password.includes(comprobacionnumeros[i])){
        tienenumeros=true;
      }
    }
    if(!tienenumeros){
      alert("La contraseña tiene que contener numeros.")
      return false;
    }
    var comprobacionletras='qwertyuiopñlkjhgfdsazxcvbnm';
    var tieneletras=false;
    for(var i=0;i<comprobacionletras.length;i++){
      if(password.includes(comprobacionletras[i])){
        tieneletras=true;
      }
    }
    if(!tieneletras){
      alert("La contraseña tiene que contener letras.")
      return false;
    }
    var comprobacionmayusculas='QWERTYUIOPÑLKJHGFDSAZXCVBNM';
    var tienemayusculas=false;
    for(var i=0;i<comprobacionmayusculas.length;i++){
      if(password.includes(comprobacionmayusculas[i])){
        tienemayusculas=true;
      }
    }
    if(!tienemayusculas){
      alert("La contraseña tiene que al menos una letra mayuscula.")
      return false;
    }
    return true;
  }

  singUp(nombre: string, apellidos: string, direccion:string, dni:string, password: string, telefono: string, email: string, sexo: string, fechaNacimiento: Date){

    console.log(nombre);
    this.usuario.nombre = nombre;
    this.usuario.apellidos = apellidos;
    this.usuario.direccion = direccion;
    this.usuario.dni = dni;
    this.usuario.password = password;
    this.usuario.telefono = telefono;
    this.usuario.email = email;
    this.usuario.sexo = sexo;
    this.usuario.fechaNacimiento = fechaNacimiento;
    this.usuario.tipo = tipo;
    this.usuario.direccion = direccion;
    console.log(this.usuario);


    if(nombre.length == 0 || apellidos.length == 0 || direccion.length == 0 || password.length == 0  
      || email.length == 0 || sexo.length == 0 || fechaNacimiento == null ) {
      alert('Tienes que rellenar todos los campos.')
   }
   else if(this.validardni(dni) && this.validartelefono(telefono) && this.comprobarpassword(password)){
    this.registroService.registrarUsuario(this.usuario).subscribe(

      response => {
        this.router.navigate(['/login'])
      }
    );

  }

}