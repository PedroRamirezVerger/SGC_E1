import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nombre_usuario: string = 'antonio.pasadas';
  password: string =  'antonio.pasadas12345';

  loginPasado: boolean;
  msg: string = ''


  constructor() { 

  }

  ngOnInit() {
  }


  logIn(nombre: any, password: string){
    console.log(nombre);
    console.log(password);
    if(nombre === this.nombre_usuario && password === this.password){
      this.loginPasado = true;
      this.msg = 'Login correcto!';
    } else {
      this.loginPasado = false;
      this.msg = 'Login incorrecto.'
    }
  }
}
