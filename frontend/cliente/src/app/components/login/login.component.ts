import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginPasado: boolean;
  msg: string = ''


  constructor(private router:Router,
              private loginService: LoginService
              ) { 


}
  ngOnInit() {
  }


  logIn(nombre: string, password: string){
    this.loginService.validateLogin(nombre, password).subscribe(
      (response) => this.loginPasado = response
    );
    if(this.loginPasado){
      this.msg = 'Login correcto!';
      this.router.navigate(['/citas'])
    } else {
      this.msg = 'Login incorrecto.'
    }
  }

  singIn(){
    this.router.navigate(['/registro'])
  }
}
