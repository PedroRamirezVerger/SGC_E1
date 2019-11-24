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
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CambiodatoscontactoComponent } from './components/cambiodatoscontacto/cambiodatoscontacto.component';
import { CambiocontrasenaComponent } from './components/cambiocontrasena/cambiocontrasena.component';
import { CambiarcitaComponent } from './components/cambiarcita/cambiarcita.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


// Services

import { CitaService } from './services/cita.service';
import { UsuarioService } from './services/usuario.service';
import { UtilsService } from './services/utils.service';
import { PanelgestorComponent } from './components/panelgestor/panelgestor.component';
import { CambiodatospersonalesComponent } from './components/cambiodatospersonales/cambiodatospersonales.component';
import { CookieService } from 'ngx-cookie-service';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CitasComponent,
    RegistroComponent,
    PedircitaComponent,
    CambiodatoscontactoComponent,
    CambiocontrasenaComponent,
    CambiarcitaComponent,
    PedircitaComponent,
    NavbarComponent,
    FooterComponent,
    PanelgestorComponent,
    CambiodatospersonalesComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [
    CitaService,
    UsuarioService,
    UtilsService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
