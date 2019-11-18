import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { Cita } from 'src/app/entity/Cita';
import { CitaService } from 'src/app/services/cita.service';
import { Usuario } from 'src/app/entity/Usuario';
import { Medico } from 'src/app/entity/Medico';
import { UsuarioService} from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';
import { CookieService } from 'ngx-cookie-service';




@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {

  citas: Cita[] = [];
  usuario: Usuario = new Usuario();
  medico: Medico= new Medico();

  constructor(private router:Router,
              private citaService: CitaService,
              private cookieService: CookieService,
              private usuarioService: UsuarioService) {

  }

  ngOnInit() {
    this.usuario = JSON.parse(this.cookieService.get('usuario'));
    console.log(JSON.parse(this.cookieService.get('usuario')));
    this.mostrarListaCitas();
  }

  mostrarListaCitas(){
    this.citaService.getCitasUsuario(this.usuario.dni).subscribe(
      response => {
        this.citas = response;
        console.log(this.citas);
      }
    );
  }


  pedircita(){
    this.router.navigate(['/pedircita'])
  }
 
  eliminarcita(cita: Cita){
    console.log(cita);
    var index=this.citas.indexOf(cita);
    this.citas.splice(index, 1);
    this.citaService.deleteCita(cita._id).subscribe(
      response => {
        Swal.fire('Cita eliminada', `Cita eliminada con éxito!`, 'success');
      }
    );
  }

  cambiarcita(cita: Cita){
    this.cookieService.delete('cita');
    this.cookieService.set('cita', JSON.stringify(cita));
    this.router.navigate(['/cambiocita'])
  }

  modificardatoscontacto(){
    this.router.navigate(['/cambiodatoscontacto'])
  }
  modificarMedico(){
    this.crearmedico();
    this.usuarioService.modificarMedico(this.medico).subscribe(
      response => {
        //Swal.fire('Cita eliminada', `Cita eliminada con éxito!`, 'success');
      }
    );
  }
  cambiarcontrasena(){
    this.router.navigate(['/cambiocontrasena'])
  }
  crearmedico(){
    this.medico._id=this.usuario._id;
    this.medico.apellidos=this.usuario.apellidos;
    this.medico.centroMedico=this.usuario.centroMedico;
    this.medico.direccion=this.usuario.direccion;
    this.medico.dni=this.usuario.dni;
    this.medico.email=this.usuario.email;
    this.medico.fechaNacimiento=this.usuario.fechaNacimiento;
    this.medico.localidad=this.usuario.localidad;
    this.medico.medico=this.usuario.medico;
    this.medico.nombre=this.usuario.nombre;
    this.medico.password=this.usuario.password;
    this.medico.sexo=this.usuario.sexo;
    this.medico.telefono=this.usuario.telefono;
  }
}
