import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }


  validardni(dni:string) {
    const nifRegex = /^[0-9]{8}[QWERTYUIOPÑLKJHGFDSAZXCVBNM]$/i;
    console.log(nifRegex.test(dni));
    if(!nifRegex.test(dni)){
      Swal.fire("DNI incorrecto", "El dni tiene que tener 8 números y 1 letra.", "error");
      return false;
    }
    return true;
  }
  controlaremail(email:string){
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if(!emailRegex.test(email)){
      Swal.fire("Email incorrecto", "Introduzca el email de manera correcta. Ejemplo: ejemplo@ejemplo.es", "error");
      return false;
    }
    return true;
  }
  validartelefono(telefono:string){
    const telefonoRegex = /^[0-9]{9}$/;
    if(!telefonoRegex.test(telefono)){
      Swal.fire("Teléfono incorrecto", "Introduce el telefono de manera correcta.", "error");
      return false;
    }
    return true;
  }
  comprobarpassword(password:string){
    if(password.length<7){
      Swal.fire("Contraseña incorrecta", "La contraseña tiene que tener una longitud mayor de 7.", "error");
      return false;
    }
    var numeros=parseInt(password);
    if(String(numeros).length < 2){
      Swal.fire("Contraseña incorrecta", "La contraseña tiene que tener al menos un numero.", "error");
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
      Swal.fire("Contraseña incorrecta", "La contraseña tiene que contener numeros.", "error");
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
      Swal.fire("Contraseña incorrecta", "La contraseña tiene que contener letras.", "error");
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
      Swal.fire("Contraseña incorrecta", "La contraseña tiene que al menos una letra mayuscula.", "error");
      return false;
    }
    return true;
  }




}
