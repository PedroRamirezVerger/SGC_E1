import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';



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
    this.usuarioService.validateLogin(dni, password).subscribe(
      response => {
        (this.loginPasado = response)
        if(this.loginPasado){
          this.msg = 'Login correcto!';
          this.router.navigate(['/citas', dni])
        } else {
          this.msg = 'Login incorrecto.'
        }
      }
    );
  }

  singIn(){
    this.router.navigate(['/registro'])
  }
}
