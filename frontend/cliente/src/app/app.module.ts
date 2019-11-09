import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTING } from './app.routes';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CitasComponent } from './components/citas/citas.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PedircitaComponent } from './components/pedircita/pedircita.component';
import { HttpClientModule } from '@angular/common/http';


// Services

import { CitaService } from './services/cita.service';
import { UsuarioService } from './services/usuario.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CitasComponent,
    RegistroComponent,
    PedircitaComponent//,
    //CambiodatosContactoComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [
    CitaService,
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
