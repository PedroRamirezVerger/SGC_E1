import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cita } from 'src/app/entity/Cita';
import { CitaService } from 'src/app/services/cita.service';
import { Usuario } from 'src/app/entity/Usuario';
import { Especialidad } from 'src/app/entity/Especialidad';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';
import { CookieService } from 'ngx-cookie-service';
import { Medico } from 'src/app/entity/Medico';
//import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-pedircita',
  templateUrl: './pedircita.component.html',
  styleUrls: ['./pedircita.component.css']
})
export class PedircitaComponent implements OnInit {
  especialidadMostrar: boolean = false;
  cita: Cita = new Cita;
  usuario: Usuario = new Usuario;
  esMedicoCabecera: boolean;
  especialidades: Especialidad[] = [];
  especialidadElegida: string;
  medicoElegido: string;
  listaMedicos : string[] = []

  constructor(private router:Router, 
              private citaService : CitaService, 
              private cookieService: CookieService, 
              private usuarioService: UsuarioService,
              ) { }
  
  
  ngOnInit() {
    this.usuario = JSON.parse(this.cookieService.get('usuario'));
    this.esMedicoCabecera = true;
  }
 /* obtenerHuecosLibres(){
    return this.
  }
  */
  obtenerespecialidades() {
    return this.citaService.getAllEspecialidades().subscribe(
      response => {
        this.especialidades = response;
        console.log(this.especialidades);
        console.log(this.especialidades[0]._nombre);
      }
    );
  }

  obtenerMedicosEspecialidad() {
    console.log(this.especialidadElegida);
    return this.citaService.getMedicosEspecialidad(this.especialidadElegida).subscribe(
      response => {
        this.listaMedicos = response;
        this.medicoElegido = this.listaMedicos[0];
        console.log(this.listaMedicos);
      }
    );

  }

  comprobarfecha(fecha:Date){
    let hoy=new Date();
    let v=fecha.toString()==="Invalid Date";
    let v2=fecha<hoy;
    if( v2 || v)
      return false;
    return true;
  }


  anadircita(dia: string, hora: string){
    let horaSeparada = hora.split(':');
    let diaSeparado = dia.split('-');
    let fecha = new Date(parseInt(diaSeparado[0]),parseInt(diaSeparado[1])-1, parseInt(diaSeparado[2]),
    parseInt(horaSeparada[0]),parseInt(horaSeparada[1]) )
    if(this.comprobarfecha(fecha)){
      this.cita.dniPaciente = this.usuario.dni;
      this.cita.fecha = fecha;
      this.cita.consulta = Math.floor((Math.random() * 25) + 1);;
      if (this.esMedicoCabecera) {
        this.cita.dniMedico = this.usuario.medico;
        this.cita.especialidad = "Médico de cabecera";
      } else {
        console.log(this.medicoElegido);
        console.log(this.especialidadElegida);
        if(this.medicoElegido.length === 0 || this.especialidadElegida.length === 0){
          Swal.fire('Error al crear cita', "Todos los campos han de estar completos.", 'error');
        } else {
          this.cita.dniMedico = this.medicoElegido;
          this.cita.especialidad = this.especialidadElegida;
        }
      }
      console.log(this.cita);
      this.citaService.addCita(this.cita).subscribe(
        response => {
          this.router.navigate(['/citas'])
          Swal.fire('Nueva cita', `Cita creada con éxito!`, 'success');
        }
      );
    }
    else{
      Swal.fire('Error de fecha', "La fecha introducida no es correcta.", 'error');
    }
  }
  mostrarEspecialidad(n:number) {
    if (n==0) {
      this.esMedicoCabecera = true;
    }
    if (n==1) {
      this.esMedicoCabecera = false;
      this.obtenerespecialidades();
      this.especialidadElegida = "Dermatologia";
      this.obtenerMedicosEspecialidad();
    }
   
  }
}
