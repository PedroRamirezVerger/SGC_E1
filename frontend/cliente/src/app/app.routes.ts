import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CitasComponent } from './components/citas/citas.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PedircitaComponent } from './components/pedircita/pedircita.component';
//import { CambiodatoscontactoComponent } from './components/cambiodatoscontacto/cambiodatoscontacto.component';




const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'citas/:dni', component: CitasComponent },
    { path: 'registro', component: RegistroComponent},
    { path: 'pedircita', component: PedircitaComponent},
   // { path: 'cambiodatoscontacto', component: CambiodatoscontactoComponent},
    { path: '**', pathMatch: 'full', redirectTo:'login' },
   

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});