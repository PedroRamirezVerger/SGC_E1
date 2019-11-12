import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CitasComponent } from './components/citas/citas.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PedircitaComponent } from './components/pedircita/pedircita.component';
import { CambiodatoscontactoComponent } from './components/cambiodatoscontacto/cambiodatoscontacto.component';
import { CambiocontrasenaComponent } from './components/cambiocontrasena/cambiocontrasena.component';
import { CambiarcitaComponent } from './components/cambiarcita/cambiarcita.component';





const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'citas/:id', component: CitasComponent },
    { path: 'registro', component: RegistroComponent},
    { path: 'pedircita/:id', component: PedircitaComponent},
    { path: 'cambiodatoscontacto/:id', component: CambiodatoscontactoComponent},
    { path: 'cambiocontrasena/:id', component: CambiocontrasenaComponent},
    { path: 'cambiocita/:idUsuario/:idCita', component: CambiarcitaComponent},
    { path: '**', pathMatch: 'full', redirectTo:'login' },
   

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});