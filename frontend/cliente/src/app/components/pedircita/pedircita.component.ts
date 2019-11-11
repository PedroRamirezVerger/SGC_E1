import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cita } from 'src/app/entity/Cita';
import { CitaService } from 'src/app/services/cita.service';
import { Usuario } from 'src/app/entity/Usuario';
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
  constructor(private router:Router, private citaService : CitaService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.usuario._id=params['_id'];
      this.usuario.dni = params['dni'];
      this.usuario.direccion = params['direcccion'];
      this.usuario.email = params['email'];
      this.usuario.especialidad = params['especialidad'];
      this.usuario.fechaNacimiento = params['fechaNacimiento']
      this.usuario.localidad = params['localidad'];
      this.usuario.medico = params['medico'];
      this.usuario.nombre = params['nombre'];
      this.usuario.password = params['password'];
      this.usuario.sexo = params['sexo'];
      this.usuario.telefono = params['telefono'];
      this.usuario.tipo = params['tipo'];
      this.usuario.apellidos = params['apellidos'];
      this.usuario.centroMedico = params['centroMedico'];
    });
    let x=document.getElementById("especialistas");
    x.style.display="none";
  }
  comprobarfecha(fecha:Date){
    let hoy=new Date();
    let v=fecha.toString()==="Invalid Date";
    let v2=fecha<hoy;
    if( v2 || v)
      return false;
    return true;
  }
  anadircita(dia: string, hora: string, tipoMedico: string){
    console.log(this.especialidadMostrar);
    let horaSeparada=hora.split(':');
    let diaSeparado=dia.split('-');
    let fecha =new Date(parseInt(diaSeparado[0]),parseInt(diaSeparado[1])-1, parseInt(diaSeparado[2]),
    parseInt(horaSeparada[0]),parseInt(horaSeparada[1]) )
    if(this.comprobarfecha(fecha)){
      this.cita.dniPaciente=this.usuario.dni;
      if (tipoMedico=='0') {
        this.cita.dniMedico='Antonio Perez Rodriguez';
        this.cita.especialidad="Médico de cabecera";
      }else{
        this.cita.dniMedico=tipoMedico;
        this.cita.especialidad=tipoMedico;
      }
      this.cita.fecha=fecha;
      this.cita.consulta=Math.floor((Math.random() * 25) + 1);;
    
      console.log(this.cita);
      this.citaService.addCita(this.cita).subscribe(
        response => {
          this.router.navigate(['/citas', this.usuario.dni])
        }
      );
    }
    else{
      alert('La fecha no es correcta.')
    }
  }
  mostrarEspecialidad(n:number) {
    let x=document.getElementById("especialistas");
    if (n==0) {
      x.style.display="none";
    }
    if (n==1) {
      x.style.display="block";
    }
   
  }
}
