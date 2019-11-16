import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/entity/Usuario';
import { Cita } from 'src/app/entity/Cita';
import { Router, ActivatedRoute } from '@angular/router';
import { CitaService } from 'src/app/services/cita.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-panelmedico',
  templateUrl: './panelmedico.component.html',
  styleUrls: ['./panelmedico.component.css']
})
export class PanelmedicoComponent implements OnInit {

    citas: Cita[] = [];
    usuario: Usuario = new Usuario();
  constructor(private router:Router,private citaService:CitaService, private cookieService: CookieService) { }

  ngOnInit() {
    this.usuario = JSON.parse(this.cookieService.get('usuario'));
    console.log(JSON.parse(this.cookieService.get('usuario')));
    this.mostrarListaCitas();
  }

  mostrarListaCitas(){
    this.citaService.getCitasMedico(this.usuario.dni).subscribe(
      response => {
        this.citas = response;
        console.log(this.citas);
      }
    );
  }
  

}
