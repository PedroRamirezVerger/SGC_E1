import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CitasComponent } from './components/citas/citas.component';



const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'citas', component: CitasComponent },
    { path: '**', pathMatch: 'full', redirectTo:'login' },

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});