import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { Cita } from 'src/app/entity/Cita';
import { CitaService } from 'src/app/services/cita.service';
import { Usuario } from 'src/app/entity/Usuario';
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

  constructor(private router:Router,
              private citaService: CitaService,
              private cookieService: CookieService) {

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

  cambiarcontrasena(){
    this.router.navigate(['/cambiocontrasena'])
  }
}
