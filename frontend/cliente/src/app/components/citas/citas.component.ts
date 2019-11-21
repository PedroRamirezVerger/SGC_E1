import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { Cita } from 'src/app/entity/Cita';
import { CitaService } from 'src/app/services/cita.service';
import { Usuario } from 'src/app/entity/Usuario';
import { Medico } from 'src/app/entity/Medico';
import { UsuarioService} from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';
import { CookieService } from 'ngx-cookie-service';
import { Rol } from 'src/app/entity/Rol';




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
    this.habilitarBotones(JSON.parse(this.cookieService.get('rol')));
    this.mostrarListaCitas(JSON.parse(this.cookieService.get('rol')));
  }

  mostrarListaCitas(rol: Rol){
    switch (rol.nombre) {
      case "PACIENTE":
        this.citaService.getCitasPaciente(this.usuario.dni).subscribe(
          response => {
            this.citas = response;
            console.log(this.citas);
          }
        );
        break;

      case "MEDICO":
        this.citaService.getCitasMedico(this.usuario.dni).subscribe(
          response => {
            this.citas = response;
            console.log(this.citas);
          }
        );
        break;

      default:
        break;
    }
   
  }
  habilitarBotones(rol: Rol){
    switch (rol.nombre) {
      case "PACIENTE":
        document.getElementById("modificardatos-button").style.display="block";
         //document.getElementById("cambiarcita-button").style.display="block";
        document.getElementById("pedircita-button").style.display="block";
        //document.getElementById("eliminarcita-button").style.display="block";
        document.getElementById("cambiocontrasena-button").style.display="block";
        break;
      case "MEDICO":
          document.getElementById("modificardatos-button").style.display="block";
        //  document.getElementById("cambiarcita-button").style.display="none";
          document.getElementById("pedircita-button").style.display="none";
         // document.getElementById("eliminarcita-button").style.display="none";
          document.getElementById("cambiocontrasena-button").style.display="block";
          console.log(this.cookieService.get('gestor'));
          if (this.cookieService.get('gestor')==='true') {
            document.getElementById("pedircita-button").style.display="block";
          }
        break;

      default:
        break;
    }
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
  modificardatosPersonales(){
    this.router.navigate(['/cambiodatospersonales'])
  }
  modificarMedico(){
    this.crearmedico();
    this.usuarioService.modificarMedico(this.medico).subscribe(
      response => {
        Swal.fire('MIR Aprobado', `Ya eres Médico!`, 'success');
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
