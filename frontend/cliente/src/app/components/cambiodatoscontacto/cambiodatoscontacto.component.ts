import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/entity/Usuario';
import { CambiodatoscontactoService} from './cambiodatoscontacto.service';

@Component({
  selector: 'app-cambiodatoscontacto',
  templateUrl: './cambiodatoscontacto.component.html',
  styleUrls: ['./cambiodatoscontacto.component.css']
})
export class CambiodatoscontactoComponent implements OnInit {

  usuario: Usuario = new Usuario;
  constructor(private router:Router, private Cambiodatoscontactoservice:CambiodatoscontactoService) { }

  ngOnInit() {
  }

  modificardatoscontacto(telefono: string, email: string){
    
    this.usuario.telefono = telefono;
    this.usuario.email = email;
    

    this.Cambiodatoscontactoservice.modificarUsuario(this.usuario).subscribe(
      response => {
        this.router.navigate(['/citas'])
      }
    );
  }

}
