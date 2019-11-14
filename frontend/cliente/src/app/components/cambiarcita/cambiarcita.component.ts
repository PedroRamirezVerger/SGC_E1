import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';
import { CitaService } from 'src/app/services/cita.service';
import { Cita } from 'src/app/entity/Cita';
import Swal from 'sweetalert2';
import { Usuario } from 'src/app/entity/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CookieService } from 'ngx-cookie-service';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-cambiarcita',
  templateUrl: './cambiarcita.component.html',
  styleUrls: ['./cambiarcita.component.css']
})
export class CambiarcitaComponent implements OnInit {

  cita: Cita = new Cita;
  usuario: Usuario = new Usuario;

  constructor(private router:Router, 
              private citaService: CitaService,
              private cookieService: CookieService) { 
                
              }

  ngOnInit() {
    this.usuario = JSON.parse(this.cookieService.get('usuario'));
    this.cita = JSON.parse(this.cookieService.get('cita'));
    console.log(this.cita);
  }



  cambiarCita(dia: string, hora: string) {
    let horaSeparada = hora.split(':');
    let diaSeparado = dia.split('-');
    let fecha = new Date(parseInt(diaSeparado[0]),parseInt(diaSeparado[1])-1, parseInt(diaSeparado[2]), parseInt(horaSeparada[0]),parseInt(horaSeparada[1]) )
    if(this.comprobarfecha(fecha)){
      this.cita.fecha = fecha;
      this.citaService.modifyCita(this.cita._id, this.cita).subscribe(
        response => {
          this.router.navigate(['/citas'])
          Swal.fire('Cita modificada', `Cita modificada con éxito!`, 'success');
        }
      );
    }
    else{
      Swal.fire('Error de fecha', "La fecha introducida no es correcta.", 'error');
    }
  }


  comprobarfecha(fecha:Date){
    let hoy=new Date();
    let v=fecha.toString()==="Invalid Date";
    let v2=fecha<hoy;
    if( v2 || v)
      return false;
    return true;
  }



}
