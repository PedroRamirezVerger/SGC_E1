import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/entity/Usuario';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-panelgestor',
  templateUrl: './panelgestor.component.html',
  styleUrls: ['./panelgestor.component.css']
})
export class PanelgestorComponent implements OnInit {

  usuarios: Usuario[]= [];
  constructor(private router:Router,private usuarioService:UsuarioService, private cookieService: CookieService) { }

  ngOnInit() {
    this.mostrarListaUsuarios();
  }
  mostrarListaUsuarios(){
    this.usuarioService.getAllUsers().subscribe(
      response => {
        this.usuarios =response;
      }
    )
  }
  modificardatospersonales(usuario:Usuario){
    this.cookieService.delete('usuario');
    this.cookieService.set('usuario', JSON.stringify(usuario));
    this.router.navigate(['/cambiodatospersonales'])
  }
  historialcitas(usuario:Usuario){
    this.cookieService.delete('usuario');
    this.cookieService.set('usuario', JSON.stringify(usuario));
    this.cookieService.set('rol', "GESTOR");
    console.log(this.cookieService.get('rol'));
    this.router.navigate(['/citas'])
  }

}
