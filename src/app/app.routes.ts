import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ElegirComponent } from './components/elegir/elegir.component';
import { EjemplosComponent } from './components/ejemplos/ejemplos.component';
import { FuncionaComponent } from './components/funciona/funciona.component';
import { RegistroComponent } from './components/registro/registro.component';



const APP_ROUTERS: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'precios', component: PreciosComponent },
    { path: 'elegir', component: ElegirComponent },
    { path: 'ejemplos', component: EjemplosComponent },
    { path: 'funciona', component: FuncionaComponent },
    { path: 'registro', component: RegistroComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
    
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTERS);