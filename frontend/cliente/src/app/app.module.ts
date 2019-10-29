import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTING } from './app.routes';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CitasComponent } from './components/citas/citas.component';
import { RegistroComponent } from './components/registro/registro.component';
import { HttpClientModule } from '@angular/common/http';


// Services
import { LoginService } from './components/login/login.service';
import { PedircitaComponent } from './components/pedircita/pedircita.component';
import { CambiodatoscontactoComponent } from './components/cambiodatoscontacto/cambiodatoscontacto.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CitasComponent,
    RegistroComponent,
    PedircitaComponent,
    CambiodatoscontactoComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
