import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/entity/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';
import { UtilsService } from 'src/app/services/utils.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cambiodatospersonales',
  templateUrl: './cambiodatospersonales.component.html',
  styleUrls: ['./cambiodatospersonales.component.css']
})
export class CambiodatospersonalesComponent implements OnInit {

  id:string;
  usuario:Usuario=new Usuario;

  constructor(private router:Router, 
              private usuarioService: UsuarioService,
              private utilsService: UtilsService,
              private cookieService: CookieService) { }

  ngOnInit() {
    this.usuario = JSON.parse(this.cookieService.get('usuario'));
  }
  modificardatospersonales(){
    this.usuario;
    if (this.usuario.nombre.length === 0 || 
        this.usuario.apellidos.length === 0 || 
        this.usuario.sexo.length === 0 ||
        this.usuario.tipo.length ===0){
      Swal.fire('Error en los campos', "Todos los campos han de estar completos.", 'error');
    } else {
        this.usuarioService.modificarDatosPersonalesUsuario(this.usuario).subscribe(
          response => {
            console.log(this.usuario);
            
            this.router.navigate(['/panelgestor'])
            Swal.fire('Datos de personales usuario actualizados', 'Los datos personales han sido actualizados con éxito', 'success');
          }
        );
    }
  }

}
