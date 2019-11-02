import { Component, OnInit, Input} from '@angular/core';
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
    if(nombre.length == 0|| password.length == 0) {
      this.msg = 'Tienes que rellenar todos los campos.'
   }
   else{
    this.loginService.validateLogin(nombre, password).subscribe(
      response => {
        (this.loginPasado = response)
        if(this.loginPasado){
          this.msg = 'Login correcto!';
          this.router.navigate(['/citas'])
        } else {
          this.msg = 'Login incorrecto.'
        }
      }
    );
   }
    
  }

  singIn(){
    this.router.navigate(['/registro'])
  }
}
