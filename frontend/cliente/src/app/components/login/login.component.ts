import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginPasado: boolean;
  msg: string = '';


  constructor(private router:Router,
              private usuarioService: UsuarioService
              ) { 
  }

  ngOnInit() {
  }


  logIn(dni: string, password: string){
    this.loginPasado = false;
    if (dni.length === 0 || password.length === 0){
      Swal.fire('Error en los campos', "Todos los campos han de estar completos.", 'error');
    } else {
      this.usuarioService.validateLogin(dni, password).subscribe(
        response => {
          (this.loginPasado = response)
          if(this.loginPasado){
            Swal.fire('Login correcto', "Ha iniciado sesión", 'success');
            this.router.navigate(['/citas', dni])
          } else {
            Swal.fire('Error en los campos', "El DNI y/o la contraseña son incorrectos.", 'error');
          }
        }
      );
    }
  }

  singIn(){
    this.router.navigate(['/registro'])
  }
}