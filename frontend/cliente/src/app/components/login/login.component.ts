import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import Swal from 'sweetalert2';
import { RespuestLogin } from 'src/app/respuesta/respuesta-login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg: string = '';
  respuestaLogin: RespuestLogin;


  constructor(private router:Router,
              private usuarioService: UsuarioService
              ) { 
  }

  ngOnInit() {
  }


  logIn(dni: string, password: string){
    if (dni.length === 0 || password.length === 0){
      Swal.fire('Error en los campos', "Todos los campos han de estar completos.", 'error');
    } else {
      this.usuarioService.validateLogin(dni, password).subscribe(
        response => {
          (this.respuestaLogin = response)
          console.log(this.respuestaLogin);
          if(this.respuestaLogin.loginPasado){
            Swal.fire('Login correcto', "Ha iniciado sesión", 'success');
            this.router.navigate(['/citas', this.respuestaLogin.usuario._id])
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