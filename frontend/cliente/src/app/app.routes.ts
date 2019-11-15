import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CitasComponent } from './components/citas/citas.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PedircitaComponent } from './components/pedircita/pedircita.component';
import { CambiodatoscontactoComponent } from './components/cambiodatoscontacto/cambiodatoscontacto.component';
import { CambiocontrasenaComponent } from './components/cambiocontrasena/cambiocontrasena.component';
import { CambiarcitaComponent } from './components/cambiarcita/cambiarcita.component';
import { PanelgestorComponent } from './components/panelgestor/panelgestor.component';
import { CambiodatospersonalesComponent } from './components/cambiodatospersonales/cambiodatospersonales.component';





const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'citas', component: CitasComponent },
    { path: 'registro', component: RegistroComponent},
    { path: 'pedircita', component: PedircitaComponent},
    { path: 'cambiodatoscontacto', component: CambiodatoscontactoComponent},
    { path: 'cambiocontrasena', component: CambiocontrasenaComponent},
    { path: 'cambiocita', component: CambiarcitaComponent},
    { path: 'panelgestor', component:PanelgestorComponent},
    { path: 'cambiodatospersonales', component: CambiodatospersonalesComponent},
    { path: '**', pathMatch: 'full', redirectTo:'login' },
   

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});