import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTING } from './app.routes';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CitasComponent } from './components/citas/citas.component';
import { RegistroComponent } from './components/registro/registro.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { HttpClientModule } from '@angular/common/http';


// Services
import { LoginService } from './components/login/login.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CitasComponent,
    RegistroComponent,
    UsuarioComponent
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
